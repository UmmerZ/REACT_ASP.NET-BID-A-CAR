using Bid_A_Car_Prject.Controllers;
using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;


namespace Bid_A_Car_Project.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class VehicleAPIController : ControllerBase
	{
		/*****************************************************************
         API request to get all Listing from the Database
         ******************************************************************/
		[HttpGet("All")]
		public ActionResult<IEnumerable<Vehicle>> AllVehicles_GET()
		{
			return new VehicleController().GetListings();
		}

		/*****************************************************************
         API request to get all Users from the Database
         ******************************************************************/
		[HttpGet("AllUsers")]
		public ActionResult<IEnumerable<User>> AllUsers_GET()
		{
			return new UserController().GetUsers();
		}

		/*****************************************************************
         API request to get Individual Listing from the Database by given ID
         ******************************************************************/
		[HttpGet("ByID")]
		public ActionResult<Vehicle> VehicleByID_GET(string id)
		{
			return new VehicleController().GetListingByID(id);
		}

		/*****************************************************************
        API request to  Create New Listing
        ******************************************************************/
		[HttpPost("Create")]
		public ActionResult<Vehicle> ProductCreate_POST(string make, string model, string kms, string year, string description, string userID, string price)
		{
			ActionResult<Vehicle> result;
			try
			{
				result = new VehicleController().CreateListing(make, model, kms, year, description, userID, price);
			}
			catch (Exception e)
			{
				return StatusCode(500, $"Unknown error occurred, please try again later.{e.Message}");
			}

			return result;
		}

		/*****************************************************************
      API request to Delete the listing with provided ID
      ******************************************************************/
		[HttpDelete("DeleteListing")]
		public void DeleteListing_POST(string id)
		{
			new VehicleController().DeleteListing(id);
		}

		/*****************************************************************
      API request to Update the listing with provided ID
      ******************************************************************/
		[HttpPut("UpdateListing")]
		public ActionResult<Vehicle> UpdateListing_POST(string id, string make, string model, string kilometers, string year, string description, string price)
		{
			Vehicle result;
			try
			{
				result = new VehicleController().UpdateListingByID(id, make, model, kilometers, year, description, price);
				return result;
			}
			catch (Exception e)
			{
				throw new Exception($"Sorry! {e.Message}");
			}
		}
		/******************************************************************************************
		 will be used in future for my bidding purpose
		 ****************************************************************************************/
		[HttpPost("Bid")]
		public ActionResult<Transaction> CreateTransaction_POST(string sellerID, string buyerID, string numberOfBids, string saleAmount)
		{
			ActionResult<Transaction> result;
			result = new VehicleController().CreateTransaction(sellerID, buyerID, numberOfBids, saleAmount);
			return result;
		}
	}
}