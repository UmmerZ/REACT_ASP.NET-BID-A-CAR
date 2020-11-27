using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;

namespace Bid_A_Car_Project.Models
{[Table("FileModel")]
    public class FileModel
    {
        [Key]
        [Column(TypeName = "int(10)")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        
        public int FileID { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string FileName { get; set; }

      
      

        [Column(TypeName = "int(10)")]
        public int VehicleID { get; set; }

        [ForeignKey(nameof(VehicleID))]
        [InverseProperty(nameof(Models.Vehicle.FileModels))]

        public virtual Vehicle Vehicle { get; set; }


    }
}
