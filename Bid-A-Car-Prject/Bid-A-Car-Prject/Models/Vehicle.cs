﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{ [Table("Vehicle")]
    public class Vehicle
    {

        
        [Key]
        [Column(TypeName = "int(10)")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VehicleID { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string Make { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public string Model { get; set; }

        [Required]
        [Column(TypeName = "varchar(60)")]
        public int Kilometers { get; set; }

        [Required]
        [Column(TypeName = "varchar(6)")]
        public DateTime Year { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string Description { get; set; }

        [Column(TypeName = "int(10)")]
       public int UserID { get; set; }

        [ForeignKey(nameof(UserID))]
        [InverseProperty(nameof(Models.User.Vehicles))]

        public virtual User User { get; set; }

        public ICollection<ImagesVehicles> Images { get; set; }

    }
}
