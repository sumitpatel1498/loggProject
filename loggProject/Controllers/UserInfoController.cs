using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace loggProject.Controllers
{
    public class UserInfoController : Controller
    {
        public ActionResult Index()
        {
            DemoDBEntities5 db = new DemoDBEntities5();
            return View();
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Create(UserInfo userinfo)
        {   
            if(ModelState.IsValid) {
                db.UserInfo.Add(userinfo);
                db.saveChanges();
                return RedirectToAction("Index");
            }
            return View(userinfo);
        }
    }
}