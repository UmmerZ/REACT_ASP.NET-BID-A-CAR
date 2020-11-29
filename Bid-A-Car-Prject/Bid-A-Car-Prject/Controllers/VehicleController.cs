using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Hosting;
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
        
        //private readonly IWebHostEnvironment _hostingEnv;
        //private readonly SaleContext _context;

     
        //public VehicleController(SaleContext context, IWebHostEnvironment hostingEnv)
        //{
        //    _hostingEnv = hostingEnv;
        //    _context = context;
        //}

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
       
        public  ActionResult<Vehicle> CreateListing(string id, string make, string model, string kms, string year, string description, string userID, bool issold)
        {

            //string imageCopy = SaveImage(imageFile).ToString();

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
                    UserID = int.Parse(userID),
                    IsSold = false,
                   
                   
               
                  

                };
               
                context.Vehicles.Add(newListing);
                 context.SaveChanges();
                return (newListing);
            }
        }



        //public async Task  SaveImage(IFormFile imageFile)
        //{
            

        //    if (imageFile.Length > 0)
        //        {
        //            string imageName = Path.GetFileName(imageFile.FileName);
        //            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
        //            string imagePath = Path.Combine(_hostingEnv.WebRootPath, "wwwroot", imageName);

        //            using (var fileStream = new FileStream(imagePath, FileMode.Create))
        //            {
        //                await imageFile.CopyToAsync(fileStream);
        //            }
              
                    
                    
                    
                    
        //    }
            
        //}
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
