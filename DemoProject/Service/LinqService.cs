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

        public List<ClientViewModel> filterByGroup()
        {

            var clientRecord = entities.Clients.GroupBy(s => s.Project);
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

    }
}
