//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;

//namespace Bid_A_Car_Prject.Models.VIewModels
//{
//    public class VehicleViewModel
//    {
//        [Required]
//        [Column(TypeName = "varchar(60)")]
//        public string Make { get; set; }

//        [Required]
//        [Column(TypeName = "varchar(60)")]
//        public string Model { get; set; }

//        [Required]
//        [Column(TypeName = "int(9)")]
//        public int Kilometers { get; set; }

//        [Required]
//        [Column(TypeName = "int(6)")]
//        public int Year { get; set; }

//        [Column(TypeName = "varchar(500)")]
//        public string Description { get; set; }

//        [Column(TypeName = "int(10)")]
//        public int UserID { get; set; }

//        [Column(TypeName = "varchar(300)")]
//        public string ImageUrl { get; set; }

//        [Column(TypeName = "varchar(5)")]
//        public bool IsSold { get; set; }

//        [Required(ErrorMessage = "Please choose profile image")]
//        [Display(Name = "Vehicle Picture")]
//        public IFormFile ImageFile { get; set; }

//    }
//}
