using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Project.Models
{ [Table("Images")]
    public class ImagesVehicle
    {
        [Key]
        [Column(TypeName = "int(10)")]
        public int ImageID { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        [DisplayName("uploadFile")]
        public IFormFile ImageFile { get; set; }

        [Column(TypeName = "int(10)")]
        public int VehicleID { get; set; }

        [ForeignKey(nameof(VehicleID))]
        [InverseProperty(nameof(Models.Vehicle.Images))]

        public Vehicle Vehicle { get; set; }

        





    }
}
