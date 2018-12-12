using PCParts.Presentation.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PCParts.Presentation.WebAPI.Controllers
{
    public class UsersController : ApiController
    {
        //GET user/details/:userid
        [HttpGet]
        [Route("user/details/{userid}")]
        public Object Details(int userid)
        {
            Object user;

            try
            {
                using (var db = new PCPartsDB())
                { user = db.Users.Find(userid); }
            }
            catch (Exception) { return null; }

            if (user == null)
            {
                return new { result = false, info = "Utilizador não encontrado." };
            }
            return new { result = true, data = user };
        }
    }
}