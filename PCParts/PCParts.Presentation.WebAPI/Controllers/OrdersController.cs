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
        public class ProductsInOrder
        {
            public Products Product { get; set; }
            public int Quantity { get; set; }
            public string SupplierName { get; set; }
        }

        public class OrderWithAllDetails
        {
            public List<ProductsInOrder> Products { get; set; }
            public Orders Order { get; set; }

            public OrderWithAllDetails(List<ProductsInOrder> prod, Orders ord)
            {
                Products = prod;
                Order = ord;
            }
        }
        
        //GET order/:orderid
        /// <summary>
        /// Returns all the information related to a order
        /// </summary>
        /// <param name="orderid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("order/{orderid}")]
        public Object Details(int orderid)
        {
            List<ProductsInOrder> products = new List<ProductsInOrder>();
            OrderWithAllDetails order = null;
            {
                try
                {
                    using (var db = new PCPartsDB())
                    {
                        //Information about Order
                        var auxOrder = db.Orders.Find(orderid);
                        //Info ab
                        var productOrder = db.Product_Order.Where(po => po.OrderFK == auxOrder.OrderID).ToList();
                        foreach (var item in productOrder)
                        {
                            var product = db.Products.Where(p => p.ProductID == item.ProductFK).FirstOrDefault();
                            string supplier = db.Suppliers.Where(s => s.SupplierID == product.SupplierFK).Select(s => s.Name).FirstOrDefault();
                            ProductsInOrder prd = new ProductsInOrder
                            {
                                Product = product,
                                Quantity = item.Quantity,
                                SupplierName = supplier
                            };
                            products.Add(prd);
                        }
                        order = new OrderWithAllDetails(products, auxOrder);

                    }
                }
                catch (Exception) { return null; }

                if (order == null)
                {
                    return new { result = false, info = "Erro ao retornar os detalhes da order." };
                }
                return new { result = true, data = order };
            }
        }

        public class OrderWithUserName
        {
            public string UserName { get; set; }
            public Orders Order { get; set; }
        }

        //GET orders
        /// <summary>
        /// Returns the information about one order, as well as the user name that requested it
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("orders")]
        public Object List()
        {
            List<OrderWithUserName> orders = new List<OrderWithUserName>();

            try
            {
                using (var db = new PCPartsDB())
                {
                    var aux = db.Orders.ToList();
                    foreach (var item in aux)
                    {
                        string user = db.Users.Where(u => u.UserID == item.UserFK).Select(n => n.Name).FirstOrDefault();
                        OrderWithUserName order = new OrderWithUserName
                        {
                            Order = item,
                            UserName = user
                        };
                        orders.Add(order);
                    }
                }
            }
            catch (Exception) { return null; }

            if (orders == null)
            {
                return new { result = false, info = "Erro ao retornar todas as orders." };
            }
            return new { result = true, data = orders };
        }
    }
}