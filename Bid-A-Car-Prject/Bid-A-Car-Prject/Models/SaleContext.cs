using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class SaleContext : DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        {
            if (!optionsBuilder.IsConfigured)
            {
                string connection =
                    "server=localhost;" +
                    "port=3306;" +
                    "user=root;" +
                    "database=Test_Capstone;";
                string version = "10.4.14-MariaDB";

                optionsBuilder.UseMySql(connection, x => x.ServerVersion(version));
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Name)
                .HasCharSet("utf8mb4")
                .HasCollation("utf8mb4_general_ci");


                entity.HasData(
                    new User()
                    {
                        ID = -1,
                        Name = "John",
                        UserName = "johnny123",
                        PhoneNumber = 780000000,
                        StreetAdress = " 111 Crescent Ave",
                        City = "Edmonton",
                        PostalCode = "T5T5T5"
                    },
                    new User()
                    {
                        ID = -2,
                        Name = "Bill",
                        UserName = "billy123",
                        PhoneNumber = 780111111,
                        StreetAdress = " 222 Crescent Ave",
                        City = "Calgary",
                        PostalCode = "T6T6T6"
                    },
                    new User()
                    {
                        ID = -3,
                        Name = "John",
                        UserName = "johnny123",
                        PhoneNumber = 780225887,
                        StreetAdress = " 666 Crescent Ave",
                        City = "Chicago",
                        PostalCode = "T7T7T7"
                    }


                    );




            });
            modelBuilder.Entity<Vehicle>(entity =>
            {


                string keyName = "FK_" + nameof(Vehicle) +
                    "_" + nameof(User);

                entity.Property(e => e.Model)
                .HasCharSet("utf8mb4")
                .HasCollation("utf8mb4_general_ci");

                entity.HasIndex(e => e.UserID)
                .HasName(keyName);

                entity.HasOne(thisEntity => thisEntity.User)
               .WithMany(parent => parent.Vehicles)
               .HasForeignKey(thisEntity => thisEntity.UserID)
               .OnDelete(DeleteBehavior.Restrict)
               .HasConstraintName(keyName);

                entity.HasData(
                    new Vehicle()
                    {
                        VehicleID = -1,
                        Make = "BMW",
                        Model = "X5",
                        Kilometers = 3000,
                        Year = new DateTime(2013, 11, 25),
                        Description = "The cat is in mint condition, Lady Driven ",
                        UserID = -2
                    },
                    new Vehicle()
                    {
                        VehicleID = -2,
                        Make = "AUDI",
                        Model = "Q5",
                        Kilometers = 13000,
                        Year = new DateTime(2017, 11, 25),
                        Description = "3 year old drives like brand new ",
                        UserID = -1
                    },
                    new Vehicle()
                    {
                        VehicleID = -3,
                        Make = "Ford",
                        Model = "F150",
                        Kilometers = 33000,
                        Year = new DateTime(2018, 11, 25),
                        Description = "Trick runs smooth Dont need it any more ",
                        UserID = -3
                    }
                    );
            });

            modelBuilder.Entity<Transaction>(entity =>
            {


                string keyTransaction = "FK_" + nameof(Transaction) +
                    "_" + nameof(User);

                entity.HasIndex(e => e.SellerID)
                .HasName(keyTransaction);

                entity.HasOne(thisEntity => thisEntity.User)
                .WithMany(parent => parent.Transactions)
                .HasForeignKey(thisEntity => thisEntity.SellerID)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName(keyTransaction);

            });
            modelBuilder.Entity<ImagesVehicles>(entity =>
            {


                string keyImage = "FK_" + nameof(ImagesVehicles) +
                    "_" + nameof(Vehicle);

                entity.HasIndex(e => e.VehicleID)
                .HasName(keyImage);

                entity.HasOne(thisEntity => thisEntity.Vehicle)
                .WithMany(parent => parent.Images)
                .HasForeignKey(thisEntity => thisEntity.VehicleID)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName(keyImage);

            });
        }

        }
    }
