
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

       
    
    public ActionResult<Vehicle> CreateListing( string make, string model, string kms, string year, string description, string userID, string price )
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

        public void DeleteListing(string id)
        {
         
            
            using (SaleContext context = new SaleContext())
            {
              
                context.Vehicles.Remove(GetListingByID(id));
                context.SaveChanges();
              
            }
        }

        public Vehicle UpdateListingByID(string id, string make, string model, string kilometers, string year, string description,  string price)
        {
            Vehicle result;
            int parsedID = int.Parse(id);
            // TODO: Trim name;
            using (SaleContext context = new SaleContext())
            {
                
                result = context.Vehicles.Where(x => x.ID == parsedID).Single();
                if (id == null)
                {
                    
                    Exception e = new Exception("You are trying to update a car that does not exist. Please create the car first.");
                    throw e;
                }
                else
                {
                    result.Make = make.Trim();
                    result.Model = model.Trim();
                    result.Kilometers = int.Parse(kilometers);
                    result.Year = int.Parse(year);
                    result.Description = description.Trim();
                    result.Price = int.Parse(price);
                    context.SaveChanges();
                }
            }
            return result;
        }

        public Transaction CreateTransaction(string sellerID, string buyerID, string numberOfBids, string saleAmount)
        {
            
            using(SaleContext context = new SaleContext())
            {
                Transaction newTransaction = new Transaction()
                {
                    SellerID = int.Parse(sellerID),
                    BuyerID = int.Parse(buyerID),
                    SaleAmount = int.Parse(saleAmount),

                };
                newTransaction.NumberOfBids++;
                context.Transactions.Add(newTransaction);
                context.SaveChanges();
                return newTransaction;
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
