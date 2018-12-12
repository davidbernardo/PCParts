using PCParts.Presentation.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PCParts.Presentation.WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class OrdersController : ApiController
    {
        //GET order/:orderid
        [HttpGet]
        [Route("order/{orderid}")]
        public Object Details(int orderid)
        {
            Object orderDetails;

            try
            {
                using (var db = new PCPartsDB())
                { orderDetails = db.Orders.Find(orderid); }
            }
            catch (Exception) { return null; }

            if (orderDetails == null)
            {
                return new { result = false, info = "Erro ao retornar os detalhes do produto." };
            }
            return new { result = true, data = orderDetails };
        }

        //GET orders
        [HttpGet]
        [Route("orders")]
        public Object List()
        {
            Object orders;

            try
            {
                using (var db = new PCPartsDB())
                { orders = db.Orders.ToList(); }
            }
            catch (Exception) { return null; }

            if (orders == null)
            {
                return new { result = false, info = "Erro ao retornar os detalhes do produto." };
            }
            return new { result = true, data = orders };
        }
    }
}