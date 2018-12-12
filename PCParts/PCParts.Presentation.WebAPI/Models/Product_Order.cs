using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PCParts.Presentation.WebAPI.Models
{
    public class Product_Order
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public Orders OrderID { get; set; }
        [ForeignKey("OrderID")]
        public int OrderFK { get; set; }

        [Required]
        public Products ProductID { get; set; }
        [ForeignKey("ProductID")]
        public int ProductFK { get; set; }
    }
}