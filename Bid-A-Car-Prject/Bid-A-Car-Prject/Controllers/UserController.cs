using Bid_A_Car_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bid_A_Car_Prject.Controllers
{
   
    public class UserController : Controller
    {

        public User GetUserByID(string id)
        {
           User userResult;
            using (SaleContext context = new SaleContext())

            {
                userResult = context.Users.Where(x => x.ID == int.Parse(id)).Single();
              
            }
            return userResult;
        }
        public List<User> GetUsers()
        {
            List<User> userResults;
            using (SaleContext context = new SaleContext())
                
            {
                userResults = context.Users.ToList();
            }
            return userResults;
        }
  
        
        public User RegisterUser(string id, string name, string phoneNumber, string streetAddress, string city, string postalCode)
        {
               using (SaleContext context = new SaleContext())
            {
                User newRegistration = new User
                {
                    ID = int.Parse(id),
                    Name = name.Trim(),
                   
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

        public bool IfUserExists(string username, string password)
        {
            
            using (SaleContext context = new SaleContext()){
             bool result = context.Users.Where(x => x.UserName == username && x.Password == password).Any();

               
            }

            return true;
        }
    }
}
