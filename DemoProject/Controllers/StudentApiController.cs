using DemoProject.Service;
using DemoProject.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoProject.Controllers
{
    public class StudentApiController : Controller
    {
        // GET: StudentApi
        ClientService service = new ClientService();
        public ActionResult Index()
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
        public JsonResult GetClientById(int id)
        {
            var result = service.GetClientById(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetClientList()
        {
            var result = service.GetClientList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateClient(ClientViewModel data)
        {
            var result = service.UpdateClient(data);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult RemoveClient(int ClientId)
        {
            var result = service.DeleteClient(ClientId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}