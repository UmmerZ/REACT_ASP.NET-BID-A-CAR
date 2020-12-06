using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Prject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        /*****************************************************************
       API request to get Individual User from the Database by given ID
       ******************************************************************/

        [HttpGet("login")]
        public ActionResult<User> GetUserByUserName(string userName, string password)
        {
           User userResult;
            using (SaleContext context = new SaleContext())
               
            {
                  userResult = context.Users.Where(x => x.UserName == userName.Trim() && x.Password == password.Trim()).Single();
            }
            return Ok();
        }

        [HttpGet("All")]
        public List<User> GetUsers()
        {
            List<User> userResults;
            using (SaleContext context = new SaleContext())
                
            {
                userResults = context.Users.ToList();
            }
            return userResults;
        }


        [HttpPost("Create")]
        public User CreateUser( string name, string email,string userName, string phoneNumber, string streetAddress, string city, string postalCode)
        {
               using (SaleContext context = new SaleContext())
            {
                User newRegistration = new User
                {
                   
                    Name = name.Trim(),
                    Email = email.Trim(),
                    UserName= userName.Trim(),
                    PhoneNumber = phoneNumber.Trim(),
                    StreetAdress = streetAddress.Trim(),
                    City = city.Trim(),
                    PostalCode = postalCode.Trim()
                };
                context.Users.Add(newRegistration);
                context.SaveChanges();
                return newRegistration;
            }
        }

        [HttpPost("Register")]
        public User RegisterUser(string email, string userName, string password)
        {
            using (SaleContext context = new SaleContext())
            {
                User newRegistration = new User
                {

                    
                    Email = email.Trim(),
                    UserName = userName.Trim(),
                    Password = password.Trim()

                };
                context.Users.Add(newRegistration);
                context.SaveChanges();
                return newRegistration;
            }
        }
        [HttpPut("UpdateUser")]

        public User UpdateUser(string userID, string userName, string name, string email, string streetAddress, string phoneNumber, string city, string postalCode)
            
        {
            User result;
            using (SaleContext context = new SaleContext())
            {
                result = context.Users.Where(x => x.UserID == int.Parse(userID)).FirstOrDefault();

                result.Name = name.Trim();
                result.Email = email.Trim();
                result.StreetAdress = streetAddress.Trim();
                result.PhoneNumber = phoneNumber.Trim();
                result.City = city.Trim();
                result.PostalCode = postalCode.Trim();
                context.SaveChanges();

            }
            return result;
            

        }
       
        public User IfUserExists(string username, string password)
        {
            
            using (SaleContext context = new SaleContext()){
             User result = context.Users.Where(x => x.UserName == username && x.Password == password).FirstOrDefault();

                return result;  
            }

            
        }
    }
}
