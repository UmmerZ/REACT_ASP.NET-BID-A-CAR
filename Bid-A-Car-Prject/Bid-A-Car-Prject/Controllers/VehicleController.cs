
using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;


namespace Bid_A_Car_Project.Controllers
{

    [Route("[controller]")]
       [ApiController]
    public class VehicleController : Controller
    {
        //private readonly IWebHostEnvironment _webHostEnvironment;
        //    private readonly SaleContext _context;
        //    public VehicleController (SaleContext dbContext, IWebHostEnvironment webHostEnvironment)
        //{
        //    _context = dbContext;
        //    _webHostEnvironment = webHostEnvironment;

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
        public IActionResult CreateListing()
        {
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

       
      [HttpPost("Create")]
        public async Task<IActionResult> CreateListing( [FromForm] Vehicle models)
        {
            models.ImageUrl = await UploadedFile(models.ImageFile);

            using (SaleContext context = new SaleContext())
            {
                Vehicle newListing = new Vehicle
                {

                    VehicleID = models.VehicleID,
                    Make = models.Make,
                    Model = models.Model,
                    Kilometers = models.Kilometers,
                    Year = models.Year,
                    Description = models.Description,
                    UserID = models.UserID,
                    IsSold = false,
                    ImageUrl = models.ImageUrl

                };
                context.Vehicles.Add(models);
                await context.SaveChangesAsync();

            }    
            return StatusCode(201);
        }





 [NonAction]
        public async Task<string> UploadedFile(IFormFile file)
        {

            try
            {
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                string uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                return uniqueFileName;
            }
            catch
            {
                throw new Exception("problem with file upload");
            }
               
            
        }
           
               
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
