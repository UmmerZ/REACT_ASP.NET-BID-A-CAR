
using Bid_A_Car_Prject.Controllers;
using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


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
        API request to get Individual User from the Database by given ID
        ******************************************************************/
        [HttpGet("UserByID")]
        public ActionResult<User> UserByID_GET(string id)
        {

            return new UserController().GetUserByID(id);
        }



        /*****************************************************************
        API request to  Create New Listing
        ******************************************************************/
        [HttpPost("Create")]
        public ActionResult<Vehicle> ProductCreate_POST(string vehicleID, string make, string model, string kms, string year, string description, string userID, string price)
        {
            ActionResult<Vehicle> result;
            try
            {
                result = new VehicleController().CreateListing(vehicleID, make, model, kms, year, description, userID, price);
            }

            catch (Exception e)
            {
                return StatusCode(500, $"Unknown error occurred, please try again later.{e.Message}");
            }

            return result;
        }




        /*****************************************************************
        API request to Create New User
        ******************************************************************/
        [HttpPost("RegisterUser")]
        public ActionResult<User> Register_POST(string id, string name, string userName, string password, string phoneNumber, string streetAddress, string city, string postalCode)
            
        {
            ActionResult<User> result;
            result = new UserController().RegisterUser(id, name, userName, password, phoneNumber, streetAddress, city, postalCode);
            return result;
        }
          
       
    }
}
