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
        ClientService service = new ClientService();
        public ActionResult Index(ClientViewModel model)
        {
            
            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }
        public JsonResult InsertClient(ClientViewModel model)
        {
            var result = service.InsertClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}