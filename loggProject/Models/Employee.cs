using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace loggProject.Models
{
    public class Employee
    {
        public int EmployeeID {
            get;
            set;
        }
        public string EmployeeName {
            get;
            set;
        }
        public string DeptWorking {
            get;
            set;
        }
        public int Salary {
            get;
            set;
        }
    }
}