namespace PCParts.Presentation.WebAPI.Migrations
{
    using PCParts.Presentation.WebAPI.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PCParts.Presentation.WebAPI.Models.PCPartsDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(PCParts.Presentation.WebAPI.Models.PCPartsDB context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var users = new List<Users>
            {
                new Users {UserID=1,Address="Teste1",DateOfBirth=new DateTime(1996,8,6),Email="teste1@teste.com",Name="David1",Password="pass1",Phone="912345676",Role="Client",PostalCode="123" },
                new Users {UserID=2,Address="Teste2",DateOfBirth=new DateTime(1996,8,7),Email="teste2@teste.com",Name="David2",Password="pass2",Phone="912345677",Role="Admin",PostalCode="1234" },
                new Users {UserID=3,Address="Teste3",DateOfBirth=new DateTime(1996,8,8),Email="teste3@teste.com",Name="David3",Password="pass3",Phone="912345678",Role="Client",PostalCode="1235" }

            };
            users.ForEach(uu => context.Users.Add(uu));
            context.SaveChanges();

            var orders = new List<Orders>
            {
                new Orders {Details="Coiso1",OrderDate= new DateTime(2017,5,7),OrderID=1,Status="Processing",Address="teste", PaymentMethod ="teste",PostalCode="teste",Price=12,UserFK=1 },
                new Orders {Details="Coiso2",OrderDate= new DateTime(2017,5,7),OrderID=2,Status="Processing",Address="teste", PaymentMethod ="teste",PostalCode="teste",Price=12,UserFK=2 },
                new Orders {Details="Coiso3",OrderDate= new DateTime(2017,5,7),OrderID=3,Status="Processing",Address="teste", PaymentMethod ="teste",PostalCode="teste",Price=12,UserFK=3 },
                new Orders {Details="Coiso4",OrderDate= new DateTime(2017,5,7),OrderID=4,Status="Processing",Address="teste", PaymentMethod ="teste",PostalCode="teste",Price=12,UserFK=3 },
                new Orders {Details="Coiso5",OrderDate= new DateTime(2017,5,7),OrderID=5,Status="Processing",Address="teste", PaymentMethod ="teste",PostalCode="teste",Price=12,UserFK=3 }
            };
            orders.ForEach(oo => context.Orders.Add(oo));
            context.SaveChanges();

            var suppliers = new List<Suppliers>
            {
                new Suppliers {SupplierID=1,Phone="912345678",Name="Parts1",Address="rua n2",Email="teste1@teste.pt",PostalCode="123" },
                new Suppliers {SupplierID=2,Phone="912345678",Name="Parts2",Address="rua n2",Email="teste2@teste.pt",PostalCode="123" },
                new Suppliers {SupplierID=3,Phone="912345678",Name="Parts3",Address="rua n2",Email="teste3@teste.pt",PostalCode="123" }
            };
            suppliers.ForEach(ss => context.Suppliers.Add(ss));
            context.SaveChanges();

            var producttype = new List<ProductType>
            {
                new ProductType {ProductTypeID=1,Type="Processador"  },
                new ProductType {ProductTypeID=2,Type="Memória RAM"  },
                new ProductType {ProductTypeID=3,Type="Motherboard"  }
            };
            producttype.ForEach(pt => context.ProductType.Add(pt));
            context.SaveChanges();

            var products = new List<Products>
            {
                new Products {Description="Processador tops1",Details="5*",Name="Processador1",Price=5.99,ProductID=1,SupplierFK=1,Image="image1.png",Stock=7,ProductTypeFK=1  },
                new Products {Description="Processador tops2",Details="5*",Name="Processador2",Price=5.99,ProductID=2,SupplierFK=3,Image="image2.png",Stock=5,ProductTypeFK=1  },
                new Products {Description="RAM tops1",Details="5*",Name="RAM1",Price=5.99,ProductID=3,SupplierFK=3,Image="image3.png",Stock=4,ProductTypeFK=2  },
                new Products {Description="Motherboard tops1",Details="5*",Name="Motherboard1",Price=5.99,ProductID=4,SupplierFK=1,Image="image4.png",Stock=3,ProductTypeFK=3  },
                new Products {Description="Motherboard tops2",Details="5*",Name="Motherboard2",Price=5.99,ProductID=5,SupplierFK=2,Image="image5.png",Stock=12,ProductTypeFK=3  },
                new Products {Description="RAM tops2",Details="5*",Name="RAM2",Price=5.99,ProductID=6,SupplierFK=3,Image="image6.png",Stock=10,ProductTypeFK=2  },
                new Products {Description="RAM tops3",Details="5*",Name="RAM3",Price=5.99,ProductID=7,SupplierFK=1,Image="image7.png",Stock=4,ProductTypeFK=2  },
                new Products {Description="Motherboard tops3",Details="5*",Name="Motherboard3",Price=5.99,ProductID=8,SupplierFK=2,Image="image8.png",Stock=3,ProductTypeFK=3  },
                new Products {Description="Motherboard tops4",Details="5*",Name="Motherboard4",Price=5.99,ProductID=9,SupplierFK=1,Image="image9.png",Stock=0,ProductTypeFK=3  },
            };
            products.ForEach(pr => context.Products.Add(pr));
            context.SaveChanges();

            var product_order = new List<Product_Order>
            {
                new Product_Order {OrderFK=1,ProductFK=4,Quantity=1, ID=1 },
                new Product_Order {OrderFK=1,ProductFK=3,Quantity=2, ID=1 },
                new Product_Order {OrderFK=2,ProductFK=9,Quantity=1, ID=1 },
                new Product_Order {OrderFK=3,ProductFK=8,Quantity=1, ID=1 },
                new Product_Order {OrderFK=3,ProductFK=2,Quantity=1, ID=1 }
            };
            product_order.ForEach(po => context.Product_Order.Add(po));
            context.SaveChanges();

        }
    }
}
