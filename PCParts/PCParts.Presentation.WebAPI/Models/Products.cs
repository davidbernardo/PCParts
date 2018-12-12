using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PCParts.Presentation.WebAPI.Models
{
    public class Products
    {
        /*public Products()
        {
            ListProductOrder = new HashSet<Product_Order>();
        }*/

        [Key, Required]
        public int ProductID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Price { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Details { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public Suppliers SupplierID { get; set; }
        [ForeignKey("SupplierID")]
        public int SupplierFK { get; set; }

        [Required]
        public ProductType ProductTypeID { get; set; }
        [ForeignKey("ProductTypeID")]
        public int ProductTypeFK { get; set; }

        //public virtual ICollection<Product_Order> ListProductOrder { get; set; }
    }
}