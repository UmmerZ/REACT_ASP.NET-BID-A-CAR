using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Project.Models
{ [Table("Vehicle")]
    public class Vehicle
    {
      



        [Key]
        [Column(TypeName = "int(10)")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VehicleID { get; set; }
        

        
        [Column(TypeName = "varchar(60)")]
        public string Make { get; set; }

       [Required]
        [Column(TypeName = "varchar(60)")]
        public string Model { get; set; }

        
        [Column(TypeName = "int(9)")]
        public int Kilometers { get; set; }

        
        [Column(TypeName = "int(6)")]
        public int Year { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string Description { get; set; }

        [Column(TypeName = "int(10)")]
       public int UserID { get; set; }

        [Column(TypeName = "varchar(300)")]
        public string ImageUrl{ get; set; }

        [Column(TypeName = "varchar(10)")]
        public bool IsSold { get; set; }

        [Column(TypeName = "int(10)")]
        public int Price { get; set; }

       
        

        [ForeignKey(nameof(UserID))]
        [InverseProperty(nameof(Models.User.Vehicles))]

         public virtual User User { get; set; }

    






    }
}
