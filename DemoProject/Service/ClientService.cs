using DemoProject.Models;
using DemoProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace DemoProject.Service
{
    public class ClientService
    {
        DemoProjectEntity entities = new DemoProjectEntity();

        public int InsertClient(ClientViewModel record)
        {
            Client clientObj = new Client()
            {
                ClientId = record.ClientId,
                Description = record.Description,
                ClientName = record.ClientName,
                Project = record.Project,
                ClientEmail = record.ClientEmail,
                Rate = record.Rate,
                TermsAndService = record.TermsAndService,
                special = record.special
            };
            entities.Clients.Add(clientObj);
            return entities.SaveChanges();
        }
        public List<ClientViewModel> GetClientList()
        {
            var clientRecord = entities.Clients.ToList();
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
                   // special = clientRecord.special != null && clientRecord.special.Value
                };
                vm.Add(clientView);
            }
            return vm;
        }

        internal object UpdateClient(int clientId)
        {
            throw new NotImplementedException();
        }

        public ClientViewModel GetClientById(int id)
        {
            var clientRecord = entities.Clients.Where(s => s.ClientId == id).FirstOrDefault();
            if (clientRecord != null)
            {
                ClientViewModel clientView = new ClientViewModel()
                {
                    ClientId = clientRecord.ClientId,
                    Description = clientRecord.Description,
                    ClientName = clientRecord.ClientName,
                    Project = clientRecord.Project,
                    ClientEmail = clientRecord.ClientEmail,
                    Rate = clientRecord.Rate,
                    TermsAndService = clientRecord.TermsAndService,
                    special = clientRecord.special != null && clientRecord.special.Value
                };
                return clientView;
            }
            else
            {
                return null;
            }
        }
        public int UpdateClient(ClientViewModel data)
        {
            var clientRecord = entities.Clients.Where(s => s.ClientId == data.ClientId).FirstOrDefault();
            if (clientRecord != null)
            {
                clientRecord.Description = data.Description;
                clientRecord.ClientName = data.ClientName;
                clientRecord.Project = data.Project;
                clientRecord.ClientEmail = data.ClientEmail;
                clientRecord.Rate = data.Rate;
                clientRecord.TermsAndService = data.TermsAndService;
                clientRecord.special = data.special;
            }
            entities.Entry<Client>(clientRecord).State = System.Data.Entity.EntityState.Modified;
            return entities.SaveChanges();
        }
        public int DeleteClient(int ClientId)
        {
            var data = entities.Clients.Where(s => s.ClientId == ClientId).FirstOrDefault();
            if (data != null)
            {
                entities.Clients.Remove(data);
                return entities.SaveChanges();
            }
            else
            {
                return 0;
            }
        }


    }
}