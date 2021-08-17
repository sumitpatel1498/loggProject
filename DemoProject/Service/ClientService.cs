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
        DemoProjectEntities entities = new DemoProjectEntities();
       [HttpPost]
       public int InsertClient(ClientViewModel record)
        {
            Client clientObj = new Client()
            {
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
        public int UpdateClient(ClientViewModel data)
        {
            var clientRecord = entities.Clients.Where(s => s.ClientId == data.ClientId).FirstOrDefault();
            if(clientRecord != null)
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
            if(data != null)
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