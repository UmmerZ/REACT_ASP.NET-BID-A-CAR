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
       
        public Vehicle CreateListing(string id, string make, string model, string kms, string year, string description, string userID, List<IFormFile> files)
        {
            
            using (SaleContext context = new SaleContext())
            {
               
                Vehicle newListing = new Vehicle()
                {

                    VehicleID = int.Parse(id),
                    Make = make.Trim(),
                    Model = model.Trim(),
                    Kilometers = int.Parse(kms),
                   Year = int.Parse(year),
                   Description = description.Trim(),
                   UserID = int.Parse(userID)
                   

                };
                context.Vehicles.Add(newListing);
                context.SaveChanges();
                return newListing;
            }
        }
        public  async Task<List<String>>UploadFile(string title, List<IFormFile> file)
            
        {
            var files = new List<string>();
            foreach (var imgFIle in file)
            {
                string fileName = Path.GetFileName(imgFIle.FileName);
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);
                files.Add(fileName);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    await imgFIle.CopyToAsync(stream);
                }
            }
            AddImageFileToDatabase(files);
            return files;
        }
        public void AddImageFileToDatabase(List<string> names)
        {
            using (SaleContext context = new SaleContext())
            {
                foreach (var name in names)
                {
                    FileModel newImage = new FileModel()
                    {
                        FileName = name,
                        VehicleID = -1
                    };
                    context.Add(newImage);
                    context.SaveChanges();
                }
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
