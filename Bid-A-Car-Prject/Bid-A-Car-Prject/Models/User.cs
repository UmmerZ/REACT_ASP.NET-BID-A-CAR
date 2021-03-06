﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Project.Models
{
	[Table("User")]
	public class User
	{
		public User()
		{
			Vehicles = new HashSet<Vehicle>();
		}
		[Key]
		[Column(TypeName = "int(10)")]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int UserID
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(100)")]
		public string Name
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(50)")]
		public string UserName
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(100)")]
		public string Email
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(1000)")]
		public string Password
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(10)")]
		public string PhoneNumber
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(200)")]
		public string StreetAdress
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(50)")]
		public string City
		{
			get;
			set;
		}

		[Column(TypeName = "varchar(8)")]
		public string PostalCode
		{
			get;
			set;
		}

		public virtual ICollection<Vehicle> Vehicles
		{
			get;
			set;
		}

		public virtual ICollection<Transaction> Transactions
		{
			get;
			set;
		}
	}
}