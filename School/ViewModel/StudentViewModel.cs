using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School.Models
{
    public class StundentViewModel
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }
        public DateTime DateOfBirth{get; set;}
        public string City { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public int Pincode { get; set; }
        public string Course { get; set; }
        public DateTime AddmissionDate { get; set; }
    }
}