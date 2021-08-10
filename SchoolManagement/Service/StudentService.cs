using SchoolManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace SchoolManagement.Service
{
    public class StudentService
    {
        SchoolManagementEntities Db = new SchoolManagementEntities();
        public List<StudentDataStore_Result> GetStudentDataStore()
        {
            var student = Db.StudentDataStore().Select(s => new StudentDataStore_Result
            {
                Id = s.Id,
                Name = s.Name,
                City= s. City,
                Course = s.Course,
                Gender = s.Gender,
                Address = s.Address,
                Mobile = s.Mobile

            });
            return student; 
        }
    }
}