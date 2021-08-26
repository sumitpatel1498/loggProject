using System.Web;
using System.Web.Optimization;

namespace DemoProject
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/angular-material.css"
                      ));


            bundles.Add(new ScriptBundle("~/bundles/Common").Include(
                      "~/Scripts/NG/Site.js",
                      "~/Scripts/NG/BaseController.js"));

            bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                      "~/Scripts/Angular.js",
                      "~/Scripts/Angular-aria.js",
                      "~/Scripts/Angular-messages.js",
                      "~/Scripts/Angular-sanitize.js",
                      "~/Scripts/Angular-animate.js",
                      "~/Scripts/Angular-touch.js",
                      "~/Scripts/Angular-material.js"));

            bundles.Add(new StyleBundle("~/Content/Student").Include(
                     "~/Content/SCSS/StudentStyle.css"));

            bundles.Add(new StyleBundle("~/Content/View").Include(
                     "~/Content/SCSS/ViewStyle.css"));

            bundles.Add(new StyleBundle("~/Content/Update").Include(
                     "~/Content/SCSS/UpdateStyle.css"));

            bundles.Add(new ScriptBundle("~/Bundle/Student").Include(
                     "~/Scripts/NG/Service/StudentDataService.js",
                     "~/Scripts/NG/Controller/StudentCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/StudentList").Include(
                     "~/Scripts/NG/Service/StudentDataService.js",
                     "~/Scripts/NG/Controller/ListCtrl.js"));


            bundles.Add(new ScriptBundle("~/Bundle/ViewClient").Include(
                     "~/Scripts/NG/Service/StudentDataService.js",
                     "~/Scripts/NG/Controller/ViewCtrl.js"));


            bundles.Add(new ScriptBundle("~/Bundle/UpdateClient").Include(
                     "~/Scripts/NG/Service/StudentDataService.js",
                     "~/Scripts/NG/Controller/UpdateCtrl.js"));

            bundles.Add(new ScriptBundle("~/Bundle/GridView").Include(
                     "~/Scripts/NG/Service/StudentDataService.js",
                     "~/Scripts/NG/Controller/GridCtrl.js"));
 
            BundleTable.EnableOptimizations = false;
        }
    }
}
