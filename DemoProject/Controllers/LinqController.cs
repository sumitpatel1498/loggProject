using DemoProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoProject.Controllers
{
    public class LinqController : Controller
    {
        // GET: Linq
        ClientService service = new ClientService();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult searchClient(int id)
        {
            var result = service.searchClient(id);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}