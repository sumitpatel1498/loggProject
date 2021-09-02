using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoProject.ViewModel
{

    public class ProejctViewModel
    {
        public string ProjectName { get; set; }
        public List<ClientViewModel> Result { get; set;}
    }

    public class ClientViewModel
    {
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string Description { get; set; }
        public string Project { get; set; }
        public string ClientEmail { get; set; }
        public int Rate { get; set; }
        public bool TermsAndService { get; set; }
        public bool special { get; set; } 
    }
    public class ProjectDetailModel
    {
        public string ClientName { get; set; }
       // public int ProjectId { get; set; }
        public string ProjectType { get; set; }
       // public string Description { get; set; }
        public string DeveloperName { get; set; }
       // public string DeveloperEmail { get; set; }
        //public List<ClientViewModel> Result { get; set; }
    }
}