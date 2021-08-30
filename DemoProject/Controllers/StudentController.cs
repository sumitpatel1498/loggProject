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
        public ActionResult Edit(int ClientId, string ViewData)
        {
            ViewBag.Id = ClientId;
            ViewBag.View = ViewData;
            return View();
        }
        public ActionResult AllClient()
        {
            return View();
        }
        public ActionResult GridView()
        {
            return View();
        }
        
    }
}