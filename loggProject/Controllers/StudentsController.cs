using System.Linq;
using System.Web.Mvc;
using loggProject.Models;
using loggProject.ViewModel;

namespace loggProject.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        DemoDBEntities7 dB = new DemoDBEntities7();
        private object std;
        private object StdInfoDto;

        public object Students { get; private set; }
        public string Name { get; private set; }
        public string Course { get; private set; }
        public int Id { get; private set; }
        
        public ActionResult Index()
        {
            var students = dB.Students.Select(std => new StudentViewModel {Id = std.Id, Name = std.Name, City= std.City, Course = std.Course}).ToList(); 
            return View(students);
        }
        [HttpGet]
        public ActionResult Create()
        {
            var students = dB.Students.Select(std => new StudentViewModel { Id = std.Id, Name = std.Name, City = std.City, Course = std.Course }).ToList();
            return View();
        }
        [HttpPost]
        //public ActionResult Create(StudentViewModel StdInfoDto)
        //{
        //    if (ModelState.IsValid) {
        //        StudentViewModel std = new StudentViewModel();
        //        {
        //            Id = StdInfoDto.Id,
        //            Name = StdInfoDto.Name,
        //            Course = StdInfoDto.Course,
        //            City = StdInfoDto.City,
        //    };

        //        dB.StdInfoDto.Add(std);
        //    }
        //    return View(StdInfoDto);
        //}
        public ActionResult Edit()
        {
            
                return View();
        }
    }
}