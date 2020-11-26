using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    [Table("Transaction")]
    public class Transaction
    {
        [Key]
        [Column(TypeName = "int(10)")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransactionID { get; set; }

        [Column(TypeName = "int(10)")]
        public int SellerID { get; set; }

       

        [Column(TypeName = "int(15)")]
        public int SaleAmount { get; set; }

        [ForeignKey(nameof(SellerID))]
        [InverseProperty(nameof(Models.User.Transactions))]
         public virtual User User { get; set; }


        
    }
}
