using DemoProject.Models;
using DemoProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoProject.Service
{
    public class LinqService
    {
        DemoProjectEntity entities = new DemoProjectEntity();
        
        public List<ClientViewModel> serachClient()
        {
            List<ClientViewModel> clientViewModels = new List<ClientViewModel>();
            var result = entities.Clients.Where(s => s.Project == "app").ToList();
            foreach (var client in result)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = client.ClientId,
                    Description = client.Description,
                    ClientName = client.ClientName,
                    Project = client.Project,
                    ClientEmail = client.ClientEmail,
                    Rate = client.Rate,
                    TermsAndService = client.TermsAndService,
                    special = client.special != null && client.special.Value
                };

                clientViewModels.Add(clientView);
            }
            return clientViewModels;
        }

        public List<ClientViewModel> filterByName()
        {
            var clientRecord = entities.Clients.OrderByDescending(s => s.ClientName);
            List<ClientViewModel> vm = new List<ClientViewModel>();
            foreach (var client in clientRecord)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = client.ClientId,
                    Description = client.Description,
                    ClientName = client.ClientName,
                    Project = client.Project,
                    ClientEmail = client.ClientEmail,
                    Rate = client.Rate,
                    TermsAndService = client.TermsAndService,
                    special = client.special != null && client.special.Value
                };
                vm.Add(clientView);
            }
            return vm;
        }

        //public List<ClientViewModel> filterByGroup()
        //{
        //    var clientRecord = entities.Clients.GroupBy(s => s.Project).ToList();
        //    List<ProejctViewModel> pj = new List<ProejctViewModel>();
        //    foreach (var client in clientRecord)
        //    {
        //        var proj = client.ToList();
        //        List<ClientViewModel> vm = new List<ClientViewModel>();
        //        foreach (var pr in proj)
        //        {
        //            ClientViewModel clientView = new ClientViewModel()

        //            {
        //                ClientId = pr.ClientId,
        //                Description = pr.Description,
        //                ClientName = pr.ClientName,
        //                Project = pr.Project,
        //                ClientEmail = pr.ClientEmail,
        //                Rate = pr.Rate,
        //                TermsAndService = pr.TermsAndService,
        //                special = pr.special != null && pr.special.Value
        //            };
        //            vm.Add(clientView);
        //        }
        //        ProejctViewModel project = new ProejctViewModel();
        //        {
        //            ProjectName = client.Key,
        //                Result = vm
        //        };
        //        pj.Add(project);

        //    }
        //    return pj;
           
        //}

        public List<ProjectDetailModel> filterByJoin()
        {
            var result = from project in entities.Clients
                         join projectType in entities.ProjectDetails on project.Project equals projectType.ProjectType
                         select new { ClientName = project.ClientName, Project = project.Project, DeveloperName = projectType.DeveloperName };
            List<ProjectDetailModel> vm = new List<ProjectDetailModel>();
            foreach(var client in result)
            {
                var proj = client.Project.ToList();
                List<ClientViewModel> cvm = new List<ClientViewModel>();
                foreach (var pr in proj)
                {
                    ClientViewModel clientView = new ClientViewModel()
                    {
                        ClientName = client.ClientName
                        
                    };
                    cvm.Add(clientView);
                }
                ProjectDetailModel projectView = new ProjectDetailModel()
                {
                    DeveloperName = client.DeveloperName 
                };
                    vm.Add(projectView);
                }
            return vm;
        }
           
    }
}            


