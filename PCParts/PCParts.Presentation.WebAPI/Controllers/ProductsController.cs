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
    public class ProductsController : ApiController
    {
        //GET products
        /// <summary>
        /// Returns all products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("products")]
        public Object List()
        {
            Object products;

            try
            {
                using (var db = new PCPartsDB())
                { products = db.Products.ToList(); }
            }
            catch (Exception) { return null; }

            if (products == null)
            {
                return new { result = false, info = "Erro ao retornar a lista de produtos." };
            }
            return new { result = true, data = products };  
        }

        //GET product/:productid
        /// <summary>
        /// Returns the information of one product
        /// </summary>
        /// <param name="productid"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("product/{productid}")]
        public Object Details(int productid)
        {
            Object product;

            try
            {
                using (var db = new PCPartsDB())
                { product = db.Products.Find(productid); }
            }
            catch (Exception) { return null; }

            if (product == null)
            {
                return new { result = false, info = "Erro ao retornar os detalhes do produto." };
            }
            return new { result = true, data = product };
        }

        //GET products/type/:productType
        /// <summary>
        /// Returns all products of one type
        /// </summary>
        /// <param name="productType"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("products/type/{productType}")]
        public Object Type(int productType)
        {
            Object products;

            try
            {
                using (var db = new PCPartsDB())
                { products = db.Products.Where(x => x.ProductTypeFK == productType).ToList(); }
            }
            catch (Exception) { return null; }

            if (products == null)
            {
                return new { result = false, info = "Erro ao retornar os produtos desse tipo." };
            }
            return new { result = true, data = products };
        }

        //GET products/recent
        /// <summary>
        /// Returns the most recent added products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("products/recent")]
        public Object Recent()
        {
            Object products;

            try
            {
                using (var db = new PCPartsDB())
                {
                    products = db.Products.OrderByDescending(x => x.ProductID).Take(3).ToList();
                }
            }
            catch (Exception) { return null; }

            if (products == null)
            {
                return new { result = false, info = "Erro ao retornar os produtos mais recentes." };
            }
            return new { result = true, data = products };
        }

        //GET products/type
        /// <summary>
        /// Returns the list of type of products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("products/type")]
        public Object Type()
        {
            Object types;

            try
            {
                using (var db = new PCPartsDB())
                {
                    types = db.ProductType.ToList();
                }
            }
            catch (Exception) { return null; }

            if (types == null)
            {
                return new { result = false, info = "Erro ao retornar os tipos de produtos." };
            }
            return new { result = true, data = types };
        }
    }
}