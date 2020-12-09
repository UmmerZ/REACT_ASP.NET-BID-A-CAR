using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Project.Models
{
	[Table("Transaction")]
	public class Transaction
	{
		[Key]
		[Column(TypeName = "int(10)")]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int TransactionID
		{
			get;
			set;
		}

		[Column(TypeName = "int(10)")]
		public int SellerID
		{
			get;
			set;
		}

		[Column(TypeName = "int(10)")]
		public int BuyerID
		{
			get;
			set;
		}

		[Column(TypeName = "int(10)")]
		public int NumberOfBids
		{
			get;
			set;
		}

		[Column(TypeName = "int(15)")]
		public int SaleAmount
		{
			get;
			set;
		}

		[ForeignKey(nameof(SellerID))]
		[InverseProperty(nameof(Models.User.Transactions))]
		public virtual User User
		{
			get;
			set;
		}
	}
}