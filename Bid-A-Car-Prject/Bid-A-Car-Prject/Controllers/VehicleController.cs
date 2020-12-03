
using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;


namespace Bid_A_Car_Project.Controllers
{

  
    public class VehicleController : Controller
    {
    //    private readonly IWebHostEnvironment _webHostEnvironment;
    //    private readonly SaleContext _context;
    //    public VehicleController( SaleContext context, IWebHostEnvironment webHostEnvironment)
    //    {

    //        _webHostEnvironment = webHostEnvironment;
    //        _context = context;
    //    }

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

       
    
    public Vehicle CreateListing(string vehicleID, string make, string model, string kms, string year, string description, string userID, string price )
    {
        

        using (SaleContext context = new SaleContext())
        {
                Vehicle newListing = new Vehicle()
                {

                    VehicleID = int.Parse(vehicleID),
                    Make = make.Trim(),
                    Model = model.Trim(),
                    Kilometers = int.Parse(kms),
                    Year = int.Parse(year),
                    Description = description.Trim(),
                    UserID = int.Parse(userID),
                    IsSold = false,
                  
                    Price = int.Parse(price)

                };
            context.Vehicles.Add(newListing);
             context.SaveChanges();
            return newListing;
        }
        
    }

        public void DeleteListing(string id)
        {
            
            using (SaleContext context = new SaleContext())
            {
              context.Vehicles.Remove(GetListingByID(id));
                context.SaveChanges();
              
            }
        }

        public Vehicle UpdateListing(string id,  string update,  string newValue)
        {
            using (SaleContext context = new SaleContext())
            {
                Vehicle updatedListing = context.Vehicles.Where(x => x.UserID == int.Parse(id)).Single();
                switch (update)
                {
                    case "make":
                        updatedListing.Make = newValue.Trim();
                        break;
                    case "model":
                        updatedListing.Model = newValue.Trim();
                        break;
                    case "kms":
                        updatedListing.Kilometers = int.Parse(newValue);
                        break;
                    case "description":
                        updatedListing.Description = newValue.Trim();
                        break;
                    case "price":
                        updatedListing.Price = int.Parse(newValue);
                        break;
                    default:
                        return updatedListing;
                }
                context.SaveChanges();
                return updatedListing;
            }
        }
    //    public async Task<IActionResult> UploadImage(Vehicle models, IFormFile file)
    //    {
    //        if (ModelState.IsValid)
    //        {
    //            var filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
    //            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);
    //            using (Stream stream = new FileStream(path, FileMode.Create))
    //            {
    //                await file.CopyToAsync(stream);
    //            }
    //            models.ImageUrl= filename;
    //            _context.Add(models);
    //            _context.SaveChanges();
    //        }

    //        return RedirectToAction("Index");
    //    }





        //[NonAction]
        //       public string Upload(IFormFile file)
        //       {
        //           var uploadDirecotroy = "wwwroot";
        //           var uploadPath = Path.Combine(_webHostEnvironment.WebRootPath, uploadDirecotroy);

        //           if (!Directory.Exists(uploadPath))
        //               Directory.CreateDirectory(uploadPath);

        //           var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
        //           var filePath = Path.Combine(uploadPath, fileName);

        //           using (var stream = file.Create(filePath))
        //           {
        //               file.CopyTo(stream);
        //           }
        //           return fileName;
        //       }


        //public async Task<List<String>> UploadFile(string title, List<IFormFile> file)

        //{
        //    var imgFiles = new List<string>();
        //    foreach (var imgFile in file)
        //    {
        //        string fileName = Path.GetFileName(imgFile.FileName);
        //        string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);
        //        imgFiles.Add(fileName);
        //        using (Stream stream = new FileStream(path, FileMode.Create))
        //        {
        //            await imgFile.CopyToAsync(stream);
        //        }
        //    }
        //    AddImageFileToDatabase(imgFiles);
        //    return imgFiles;
        //}
        //public void AddImageFileToDatabase(List<string> names)
        //{
        //    using (SaleContext context = new SaleContext())
        //    {
        //        foreach (var path in names)
        //        {
        //            FileModel newImage = new FileModel()
        //            {
        //                FilePath =path,
        //                VehicleID = -1
        //            };
        //            context.Add(newImage);
        //            context.SaveChanges();
        //        }
        //    }
        //}

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
