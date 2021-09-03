using DemoProject.Models;
using DemoProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;

namespace DemoProject.Service
{
    public class LinqService
    {
        DemoProjectEntity entities = new DemoProjectEntity();

        public List<ClientViewModel> serachClient()
        {
            List<ClientViewModel> clientViewModels = new List<ClientViewModel>();
            var result = entities.Clients.Where(s => s.Project == "app").ToList();
           
            Mapper.CreateMap<Client, ClientViewModel>();
            var mapObj = Mapper.Map<List<Client>, List<ClientViewModel>>(result);
            return mapObj;

            //foreach (var client in result)
            //{
            //    ClientViewModel clientView = new ClientViewModel()
            //    {
            //        ClientId = client.ClientId,
            //        Description = client.Description,
            //        ClientName = client.ClientName,
            //        Project = client.Project,
            //        ClientEmail = client.ClientEmail,
            //        Rate = client.Rate,
            //        TermsAndService = client.TermsAndService,
            //        special = client.special != null && client.special.Value
            //    };

            //    clientViewModels.Add(clientView);
            //}
           // return clientViewModels;
        }

        public List<ClientViewModel> filterByName()
        {
            var clientRecord = entities.Clients.OrderByDescending(s => s.ClientName).ToList();
            Mapper.CreateMap<Client, ClientViewModel>();
            var mapObj = Mapper.Map<List<Client>, List<ClientViewModel>>(clientRecord);
            return mapObj;

            //List<ClientViewModel> vm = new List<ClientViewModel>();
            //foreach (var client in clientRecord)
            //{
            //    ClientViewModel clientView = new ClientViewModel()
            //    {
            //        ClientId = client.ClientId,
            //        Description = client.Description,
            //        ClientName = client.ClientName,
            //        Project = client.Project,
            //        ClientEmail = client.ClientEmail,
            //        Rate = client.Rate,
            //        TermsAndService = client.TermsAndService,
            //        special = client.special != null && client.special.Value
            //    };
            //    vm.Add(clientView);
            //}
            //return vm;
        }

        public List<ProejctViewModel> filterByGroup()
        {
            var clientRecord = entities.Clients.GroupBy(s => s.Project).ToList();

            //Mapper.CreateMap<Client, ClientViewModel>();
            //var mapObj = Mapper.Map<List<Client>, List<ClientViewModel>>(clientRecord);
            //return mapObj;


            List<ProejctViewModel> pj = new List<ProejctViewModel>();            
            foreach (var client in clientRecord)
            {
                List<ClientViewModel> vm = new List<ClientViewModel>();
                var proj = client.ToList();
                
                Mapper.CreateMap<Client, ClientViewModel>();
                var mapObj = Mapper.Map<List<Client>, List<ClientViewModel>>(proj);
                //foreach (var pr in proj)
                //{
                //    ClientViewModel clientView = new ClientViewModel()

                //    {
                //        ClientId = pr.ClientId,
                //        Description = pr.Description,
                //        ClientName = pr.ClientName,
                //        Project = pr.Project,
                //        ClientEmail = pr.ClientEmail,
                //        Rate = pr.Rate,
                //        TermsAndService = pr.TermsAndService,
                //        special = pr.special != null && pr.special.Value
                //    };
                //    vm.Add(clientView);
                //}

                vm.AddRange(mapObj);
                ProejctViewModel project = new ProejctViewModel()
                {
                    ProjectName = client.Key,
                    Result = vm
                };
                pj.Add(project);
            }
            return pj;
        }        
        public List<ProjectDetailModel> FilterByJoin()
        {
            var result = from project in entities.Clients
                         join projectType in entities.ProjectDetails on project.Project equals projectType.ProjectType
                         select new 
                         { 
                             ClientName = project.ClientName, 
                             Project = project.Project, 
                             ClientEmail = project.ClientEmail,

                             DeveloperName = projectType.DeveloperName,
                             DeveloperEmail = projectType.DeveloperEmail,
                             
                             
                         };
            List<ProjectDetailModel> vm = new List<ProjectDetailModel>();
            foreach (var client in result)
            {
                ProjectDetailModel projectView = new ProjectDetailModel()
                {
                    DeveloperName = client.DeveloperName,
                    ProjectType = client.Project,
                    ClientName = client.ClientName,
                    
                };
                vm.Add(projectView);
            }
            return vm;
        }

    }
}


