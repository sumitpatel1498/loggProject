using DemoProject.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoProject.Controllers
{
    public class LinqApiController : Controller
    {
        // GET: LinqApi
        LinqService service = new LinqService();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult searchClient()
        {
            var result = service.serachClient();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult filterByName()
        {
            var result = service.filterByName();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult filterByGroup()
        {
            var result = service.filterByGroup();
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult filterByJoin()
        {
            var result = service.FilterByJoin();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}