using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Bid_A_Car_Project.Controllers
{
    public class VehicleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult List()
        {
            ViewBag.Products = GetListings();
            return View();
        }
        public IActionResult Details(string id)
        {
            ViewBag.Product = GetListingByID(id);
            return View();
        }
        public Vehicle GetListingByID(string id)
        {
            Vehicle result;
            using (SaleContext context = new SaleContext())
            {
               result = context.Vehicles.Where(x => x.VehicleID == int.Parse(id)).Single();

            }

            return result;
        }
        //public IActionResult Create(string id, string make, string model, string kms, string year, string description, string userID)
        //{

        //    try
        //    {
        //        CreateListing(id, make, model, kms, year, description, userID);
        //        ViewBag.Message = $"Product Created";
        //    }
        //    catch (Exception e)
        //    {
        //        ViewBag.Error = e;
        //        ViewBag.Message = $"Error with Validation:  {e.Message}";
        //    }

        //    return View();
        //}
        public Vehicle CreateListing(string id, string make, string model, string kms, string year, string description, string userID)
        {
            
            using (SaleContext context = new SaleContext())
            {

                Vehicle newListing = new Vehicle()
                {

                    VehicleID = int.Parse(id),
                    Make = make.Trim(),
                    Model = model.Trim(),
                    Kilometers = int.Parse(kms),
                   Year = DateTime.Parse(year),
                   Description = description.Trim(),
                   UserID = int.Parse(userID)
                   

                };
                context.Vehicles.Add(newListing);
                context.SaveChanges();
                return newListing;
            }
        }
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
