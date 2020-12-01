
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
        //private readonly SaleContext _context;
        //private readonly IWebHostEnvironment _webHostEnvironment;
        //public VehicleAPIController(SaleContext context, IWebHostEnvironment hostEnvironment)
        //{
        //   _context = context;
        //    _webHostEnvironment = hostEnvironment;
        //}

        [HttpGet("All")]
        public ActionResult<IEnumerable<Vehicle>> AllVehicles_GET()
        {
            return new VehicleController().GetListings();
        }


        [HttpGet("ByID")]
        public ActionResult<Vehicle> VehicleByID_GET(string id)
        {
            ActionResult<Vehicle> result;

            result = new VehicleController().GetListingByID(id);


            return result;
        }
        [HttpPost("Create")]
        public ActionResult<Vehicle> ProductCreate_POST(string vehicleID, string make, string model, string kilometers, string year, string description, string userID, string price)
        {

            try
            {
               new VehicleController().CreateListing(vehicleID, make, model, kilometers,year,description, userID, price);
            }

            catch (Exception e)
            {
                return StatusCode(500, $"Unknown error occurred, please try again later.{e.Message}");
            }

           return StatusCode(StatusCodes.Status201Created);
        }



    }
}
