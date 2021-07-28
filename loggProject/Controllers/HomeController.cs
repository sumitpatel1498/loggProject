using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace loggProject.Controllers
{
    public class HomeController : Controller
    {   // this code is for store log in files
        //private static readonly ILog log = (ILog)log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        //this code is for store log in database

        private static readonly ILog Logger = LogManager.GetLogger(System.Environment.MachineName);
        public ActionResult Index()
        {
            //Logger.Error("This could be some error");
            //try {
            //    int x, y, z;
            //    x = 5; y = 0;
            //    z = x / y;
            //}
            //catch (Exception ex) {
            //    log.Error(ex.ToString());
            //}
                Logger.Info("Testing information log");
                Logger.Debug("Testing Debug log");
                Logger.Fatal("Testing Fatal log");
       

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}