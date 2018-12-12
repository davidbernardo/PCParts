using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PCParts.Presentation.WebAPI.Models
{
    public class Users
    {
        /*public Users()
        {
            ListOrders = new HashSet<Orders>();
        }*/

        [Key, Required]
        public int UserID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string PostalCode { get; set; }

        //public virtual ICollection<Orders> ListOrders { get; set; }

    }
}