
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
               result = context.Vehicles.Where(x => x.ID == int.Parse(id)).Single();

            }

            return result;
        }

       
    
    public Vehicle CreateListing( string make, string model, string kms, string year, string description, string userID, string price )
    {
        //Adds new Listing to the Database

        using (SaleContext context = new SaleContext())
        {
                Vehicle newListing = new Vehicle()
                {
                    
                   
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

        public void DeleteListing(string vehiclelD)
        {
            
            using (SaleContext context = new SaleContext())
            {
              context.Vehicles.Remove(GetListingByID(vehiclelD));
                context.SaveChanges();
              
            }
        }

        public Vehicle UpdateListingByID(string id, string make, string model, string kms, string year, string description,  string price)
        {
            Vehicle result;
            int parsedID = int.Parse(id);
            // TODO: Trim name;
            using (SaleContext context = new SaleContext())
            {
                
                result = context.Vehicles.Where(x => x.ID == parsedID).FirstOrDefault();
                if (result == null)
                {
                    //if you want to create a car then
                    //string userID = "-1";
                    //result = new VehicleController().CreateListing(make, model, kms, year, description, userID, price);
                    //if you don't want a new vehicle when a vehicle was not found then
                    Exception e = new Exception("You are trying to update a car that does not exist. Please create the car first.");
                    throw e;
                }
                else
                {
                    result.Make = make.Trim();
                    result.Model = model.Trim();
                    result.Kilometers = int.Parse(kms);
                    result.Year = int.Parse(year);
                    result.Description = description.Trim();
                    result.Price = int.Parse(price);
                    context.SaveChanges();
                }
            }
            return result;
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
