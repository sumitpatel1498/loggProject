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
        public ActionResult Index()
        {
            
            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }
        public ActionResult AllClient()
        {
            return View();
        }
        [HttpPost]
        public JsonResult InsertClient(ClientViewModel model)
        {
            var result = service.InsertClient(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetClientList()
        {
            var result = service.GetClientList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpDelete]
        public JsonResult DeleteClient(int ClientId)
        {
            var result = service.DeleteClient(ClientId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}