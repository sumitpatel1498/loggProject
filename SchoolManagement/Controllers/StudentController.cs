using SchoolManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolManagement.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public SchoolManagementEntities student = new SchoolManagementEntities();
        public ActionResult Index()
        {
            var std = student.StudentDataStore();
            return View(std);
        }
        public ActionResult StudentList([Bind(Include ="Id,Name,City,Course,")] StudentDataStore_Result student)
        {   

            return View();
        }
    }
}