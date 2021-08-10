using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolManagement.ViewModel
{
    public class StudentViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public  string City { get; set; }
        public string Course { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public int Mobile { get; set; }
    }
}