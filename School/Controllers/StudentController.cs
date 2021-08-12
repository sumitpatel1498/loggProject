using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using School.Models;
using School.Services;

namespace School.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        StudentService service = new StudentService();
        public ActionResult StudentList()
        {
            var student = service.GetStudentList();
            return View(student);
        }
        [HttpPost]
        public JsonResult GetAllStudent()
        {
            SchoolEntity entities = new SchoolEntity();
            return Json(entities.StudentRegistrations);
        }

        //Get All Student 
        //[HttpPost]
        //public JsonResult GetAllStudent()
        //{
        //    using (SchoolEntity Obj = new SchoolEntity())
        //    {
        //      List<StudentRegistration> Std = Obj.StudentRegistrations.ToList();
        //        return Json(Std, JsonRequestBehavior.AllowGet);
        //    }
        //}

        [HttpPost]
        public JsonResult InsertStudent(StudentRegistration student)
        {
            using (SchoolEntity entities = new SchoolEntity())
            {
                entities.StudentRegistrations.Add(student);
                entities.SaveChanges();
            }

            return Json(student);
        }

        //Get Student By ID
        public JsonResult GetStudentById(string StudentId)
        {
            using (SchoolEntity Obj = new SchoolEntity())
            {
                int StdId = int.Parse(StudentId);
                return Json(Obj.StudentRegistrations.Find(StdId), JsonRequestBehavior.AllowGet);
            }
        }
        //[HttpPost]
        //public string InsertStudent(StudentRegistration Std)
        //{
        //    if (Std != null)
        //    {
        //        using (SchoolEntity Obj = new SchoolEntity())
        //        {
        //            Obj.StudentRegistrations.Add(Std);
        //            Obj.SaveChanges();
        //            return "Student Added Successfully";
        //        }
        //    }
        //    else
        //    {
        //        return "Student Not Inserted! Try Again";
        //    }
        //}
    }
}

