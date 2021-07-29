using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using loggProject.Models;
using Newtonsoft.Json;

namespace loggProject.Controllers
{
    public class NewtonController : Controller
    {
        class Program
        {
            static void Main(string[] args)
            {
                List<Employee> lstemployee = new List<Employee>();
                lstemployee.Add(new Employee() {
                    EmployeeID = 100,EmployeeName = "Pradeep",DeptWorking = "OnLineBanking",Salary = 10000
                });
                lstemployee.Add(new Employee() {
                    EmployeeID = 101,EmployeeName = "Mark",DeptWorking = "OnLineBanking",Salary = 20000
                });
                lstemployee.Add(new Employee() {
                    EmployeeID = 102,EmployeeName = "Smith",DeptWorking = "Mobile banking",Salary = 10000
                });
          
                string output = JsonConvert.SerializeObject(lstemployee);
                Console.WriteLine(output);
                Console.ReadLine();
                List<Employee> deserializedProduct = JsonConvert.DeserializeObject<List<Employee>>(output);
            }
        }
        public ActionResult Index()
            {
                return View();
            }
        }
    }