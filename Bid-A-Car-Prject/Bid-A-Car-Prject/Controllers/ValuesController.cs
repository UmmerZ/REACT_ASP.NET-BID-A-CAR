using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace Bid_A_Car_Project.Controllers
{
    [Route("Controller")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet("All")]
        public List<Vehicle> GetListings()
        {
            List<Vehicle> results;
            using (SaleContext context = new SaleContext())
            {
                results = context.Vehicles.ToList();
            }
            return results;
        }
    }
}
