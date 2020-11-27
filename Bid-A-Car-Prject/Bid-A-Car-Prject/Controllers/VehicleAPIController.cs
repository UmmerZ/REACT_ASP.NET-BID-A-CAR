using Bid_A_Car_Project.Models;
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
        public ActionResult<Vehicle> ProductCreate_POST(string id, string make, string model, string kms, string year, string description, string userID, List<IFormFile> files)
        {
            ActionResult<Vehicle> result;
            try
            {
                result = new VehicleController().CreateListing(id, make, model, kms, year, description, userID, files);
            }

            catch (Exception e)
            {
                result = StatusCode(500, $"Unknown error occurred, please try again later.{e.Message}");
            }
            return result;

        }

        [HttpPost("ImageUpload")]
        public Task<List<string>> Upload(string title, List<IFormFile> files)
        {
            Console.WriteLine(title);
            return new VehicleController().UploadFile(title, files);
        }
    }
}
