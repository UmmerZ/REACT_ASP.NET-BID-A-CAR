using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Prject.Controllers
{
   
    public class UserController : ControllerBase
    {
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
  
        
        public User RegisterUser(string id, string name, string userName, string password, string phoneNumner, string streetAddress, string city, string postalCode)
        {
               using (SaleContext context = new SaleContext())
            {
                User newRegistration = new User
                {
                    ID = int.Parse(id),
                    Name = name.Trim(),
                    UserName = userName.Trim(),
                    Password = password.Trim(),
                    PhoneNumber = phoneNumner.Trim(),
                    StreetAdress = streetAddress.Trim(),
                    City = city.Trim(),
                    PostalCode = postalCode.Trim()
                };
                context.Users.Add(newRegistration);
                context.SaveChanges();
                return newRegistration;
            }
        }
    }
}
