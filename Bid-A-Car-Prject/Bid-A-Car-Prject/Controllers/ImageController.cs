using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Bid_A_Car_Project.Models;

namespace Bid_A_Car_Project.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post([FromForm] ImagesVehicle file)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.ImageName);
                    using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    file.ImageFile.CopyTo(stream);
                }
                return StatusCode(StatusCodes.Status201Created);
            }
            catch(Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
