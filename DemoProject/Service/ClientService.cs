using AutoMapper;
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

            Mapper.CreateMap<ClientViewModel, Client>();
            var mapObj = Mapper.Map<ClientViewModel, Client>(record);

            //Client clientObj = new Client()
            //{
            //        ClientId = record.ClientId,
            //        Description = record.Description,
            //        ClientName = record.ClientName,
            //        Project = record.Project,
            //        ClientEmail = record.ClientEmail,
            //        Rate = record.Rate,
            //        TermsAndService = record.TermsAndService,
            //        special = record.special
            //    };
           entities.Clients.Add(mapObj);
            return entities.SaveChanges();
        }
         public List<ClientViewModel> GetClientList()
        //public ClientViewModel GetClientList(ClientViewModel model)
        {
            var clientRecord = entities.Clients.ToList();
          //  var clientRecord = entities.Clients.OrderByDescending(s => s.ClientId);
            
                Mapper.CreateMap<Client, ClientViewModel>();
                var mapObject = Mapper.Map<List<Client>, List<ClientViewModel>>(clientRecord);
                return mapObject;
          
        }     



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
          //  mapObj.Add(mapObj);
           
           
     

        
        public ClientViewModel GetClientById(int id)
        {
            var clientRecord = entities.Clients.Where(s => s.ClientId == id).FirstOrDefault();
            if (clientRecord != null)
            {
              
                Mapper.CreateMap<Client, ClientViewModel>();
                var mapObj = Mapper.Map<Client, ClientViewModel>(clientRecord);


                //ClientViewModel clientView = new ClientViewModel()
                //{
                //    ClientId = clientRecord.ClientId,
                //    Description = clientRecord.Description,
                //    ClientName = clientRecord.ClientName,
                //    Project = clientRecord.Project,
                //    ClientEmail = clientRecord.ClientEmail,
                //    Rate = clientRecord.Rate,
                //    TermsAndService = clientRecord.TermsAndService,
                //    special = clientRecord.special != null && clientRecord.special.Value
                //};
                return mapObj;
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

                clientRecord.ClientId = data.ClientId;
                clientRecord.Description = data.Description;
                clientRecord.ClientName = data.ClientName;
                clientRecord.Project = data.Project;
                clientRecord.ClientEmail = data.ClientEmail;
                clientRecord.Rate = data.Rate;
                clientRecord.TermsAndService = data.TermsAndService;
                //clientRecord.special = data.special != null && data.special.Value;

                entities.Entry<Client>(clientRecord).State = System.Data.Entity.EntityState.Modified;
                
                return entities.SaveChanges();
            
                //return entities.SaveChanges();
        }
            else
            {
                return -1;
            }
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