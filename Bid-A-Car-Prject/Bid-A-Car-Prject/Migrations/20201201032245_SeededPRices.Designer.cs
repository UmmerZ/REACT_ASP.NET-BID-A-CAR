﻿// <auto-generated />
using Bid_A_Car_Project.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Bid_A_Car_Prject.Migrations
{
    [DbContext(typeof(SaleContext))]
    [Migration("20201201032245_SeededPRices")]
    partial class SeededPRices
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Bid_A_Car_Project.Models.Transaction", b =>
                {
                    b.Property<int>("TransactionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(10)");

                    b.Property<int>("SaleAmount")
                        .HasColumnType("int(15)");

                    b.Property<int>("SellerID")
                        .HasColumnType("int(10)");

                    b.HasKey("TransactionID");

                    b.HasIndex("SellerID")
                        .HasName("FK_Transaction_User");

                    b.ToTable("Transaction");
                });

            modelBuilder.Entity("Bid_A_Car_Project.Models.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(10)");

                    b.Property<string>("City")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(100)")
                        .HasAnnotation("MySql:CharSet", "utf8mb4")
                        .HasAnnotation("MySql:Collation", "utf8mb4_general_ci");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int(12)");

                    b.Property<string>("PostalCode")
                        .HasColumnType("varchar(8)");

                    b.Property<string>("StreetAdress")
                        .HasColumnType("varchar(200)");

                    b.Property<string>("UserName")
                        .HasColumnType("varchar(50)");

                    b.HasKey("ID");

                    b.ToTable("User");

                    b.HasData(
                        new
                        {
                            ID = -1,
                            City = "Edmonton",
                            Name = "John",
                            PhoneNumber = 780000000,
                            PostalCode = "T5T5T5",
                            StreetAdress = " 111 Crescent Ave",
                            UserName = "johnny123"
                        },
                        new
                        {
                            ID = -2,
                            City = "Calgary",
                            Name = "Bill",
                            PhoneNumber = 780111111,
                            PostalCode = "T6T6T6",
                            StreetAdress = " 222 Crescent Ave",
                            UserName = "billy123"
                        },
                        new
                        {
                            ID = -3,
                            City = "Chicago",
                            Name = "John",
                            PhoneNumber = 780225887,
                            PostalCode = "T7T7T7",
                            StreetAdress = " 666 Crescent Ave",
                            UserName = "johnny123"
                        });
                });

            modelBuilder.Entity("Bid_A_Car_Project.Models.Vehicle", b =>
                {
                    b.Property<int>("VehicleID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(10)");

                    b.Property<string>("Description")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("varchar(300)");

                    b.Property<string>("IsSold")
                        .IsRequired()
                        .HasColumnType("varchar(5)");

                    b.Property<int>("Kilometers")
                        .HasColumnType("int(9)");

                    b.Property<string>("Make")
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Model")
                        .HasColumnType("varchar(60)")
                        .HasAnnotation("MySql:CharSet", "utf8mb4")
                        .HasAnnotation("MySql:Collation", "utf8mb4_general_ci");

                    b.Property<int>("Price")
                        .HasColumnType("int(10)");

                    b.Property<int>("UserID")
                        .HasColumnType("int(10)");

                    b.Property<int>("Year")
                        .HasColumnType("int(6)");

                    b.HasKey("VehicleID");

                    b.HasIndex("UserID")
                        .HasName("FK_Vehicle_User");

                    b.ToTable("Vehicle");

                    b.HasData(
                        new
                        {
                            VehicleID = -1,
                            Description = "The cat is in mint condition, Lady Driven ",
                            ImageUrl = "wwwroot/bmwx5.jpg",
                            IsSold = "0",
                            Kilometers = 3000,
                            Make = "BMW",
                            Model = "X5",
                            Price = 30000,
                            UserID = -2,
                            Year = 2014
                        },
                        new
                        {
                            VehicleID = -2,
                            Description = "3 year old drives like brand new ",
                            ImageUrl = "wwwroot/audiq5.jpg",
                            IsSold = "0",
                            Kilometers = 13000,
                            Make = "AUDI",
                            Model = "Q5",
                            Price = 40000,
                            UserID = -1,
                            Year = 2012
                        },
                        new
                        {
                            VehicleID = -3,
                            Description = "Trick runs smooth Dont need it any more ",
                            ImageUrl = "wwwroot/fordf150.jpg",
                            IsSold = "0",
                            Kilometers = 33000,
                            Make = "Ford",
                            Model = "F150",
                            Price = 20000,
                            UserID = -3,
                            Year = 2018
                        });
                });

            modelBuilder.Entity("Bid_A_Car_Project.Models.Transaction", b =>
                {
                    b.HasOne("Bid_A_Car_Project.Models.User", "User")
                        .WithMany("Transactions")
                        .HasForeignKey("SellerID")
                        .HasConstraintName("FK_Transaction_User")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Bid_A_Car_Project.Models.Vehicle", b =>
                {
                    b.HasOne("Bid_A_Car_Project.Models.User", "User")
                        .WithMany("Vehicles")
                        .HasForeignKey("UserID")
                        .HasConstraintName("FK_Vehicle_User")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
