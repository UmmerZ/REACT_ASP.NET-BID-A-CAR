
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
        private readonly SaleContext dbContext;
        private readonly IWebHostEnvironment webHostEnvironment;
        public VehicleAPIController(SaleContext context, IWebHostEnvironment hostEnvironment)
        {
            dbContext = context;
            webHostEnvironment = hostEnvironment;
        }

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
        public ActionResult ProductCreate_POST([FromForm] Vehicle models)
        {

            try
            {
               new VehicleController().CreateListing(models);
            }

            catch (Exception e)
            {
                return StatusCode(500, $"Unknown error occurred, please try again later.{e.Message}");
            }

           return StatusCode(StatusCodes.Status201Created);
        }



    }
}
