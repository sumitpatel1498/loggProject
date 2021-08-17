using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoProject.ViewModel
{
    public class ClientViewModel
    {
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string Description { get; set; }
        public string Project { get; set; }
        public string ClientEmail { get; set; }
        public int Rate { get; set; }
        public string TermsAndService { get; set; }
        public string special { get; set; } 
    }
}