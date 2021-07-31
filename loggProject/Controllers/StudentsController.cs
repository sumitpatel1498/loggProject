using System.Linq;
using System.Web.Mvc;
using loggProject.Models;
using loggProject.Services;
using loggProject.ViewModel;

namespace loggProject.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        StudentService service = new StudentService();

        public ActionResult Index()
        {
            var students = service.GetStudentList();
            return View(students);
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(StudentViewModel StdInfoDto)
        {
            if (ModelState.IsValid) {

                return RedirectToAction("Index");
            }
            return View(StdInfoDto);
        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            var student = service.GetStudentById(id);
            ViewBag.Info = "Hello";
            return View(student);
        }
        [HttpPost]
        public ActionResult Edit(StudentViewModel StdInfoDto)
        {
            if (ModelState.IsValid) {
                var info = service.UpdateStudent(StdInfoDto);
                TempData["Info"]= info;
                return RedirectToAction("Index");
            }
            return View();

        }

    }
}