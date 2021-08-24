using DemoProject.Service;
using DemoProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoProject.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        
        public ActionResult Index()
        {
            
            return View();
        }
        public ActionResult Edit(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }
        public ActionResult AllClient()
        {
            return View();
        }
        public ActionResult viewInfo(int ClientId)
        {
            ViewBag.Id = ClientId;
            return View();
        }
        
    }
}