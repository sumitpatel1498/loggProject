using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using loggProject.Models;
using loggProject.ViewModel;

namespace loggProject.Services
{
    public class StudentService
    {
        DemoDBEntities7 db = new DemoDBEntities7();

        public List<StudentViewModel> GetStudentList()
        {
            //var students = db.Students.ToList();
            //if (students.Count > 0) {
            //    List<StudentViewModel> list = new List<StudentViewModel>();
            //    foreach (var student in students) {
            //        list.Add(new StudentViewModel {
            //            Id = student.Id,
            //            Name = student.Name,
            //            City = student.City,
            //            Course = student.Course
            //        });
            //    }

            //    return list;
            //}

            var students = db.Students.Select(s => new StudentViewModel {
                Id = s.Id,
                Name = s.Name,
                City = s.City,
                Course = s.Course
            }).ToList();
            return students;
        }

        public StudentViewModel GetStudentById(int id)
        {
            var student = db.Students.Where(s => s.Id == id).Select(s => new StudentViewModel {
                Id = s.Id,
                Name = s.Name,
                City = s.City,
                Course = s.Course
            }).FirstOrDefault();
            return student;

        }

        public int AddStudent(StudentViewModel StdInfoDto)
        {
            Student stdnt = new Student() {
                Id = StdInfoDto.Id,
                Name = StdInfoDto.Name,
                Course = StdInfoDto.Course,
                City = StdInfoDto.City
            };
            db.Students.Add(stdnt);
            return db.SaveChanges();
        }
        public string UpdateStudent(StudentViewModel stdInfoDto)
        {
            var student = db.Students.Where(s => s.Id == stdInfoDto.Id).FirstOrDefault();
            if(student == null) {
                return "Student info not found.";
            }
            else {
                student.Name = stdInfoDto.Name;
                student.Course = stdInfoDto.Course;
                student.City = stdInfoDto.City;

                db.Entry(student).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return "Student updated successfully.";
            }
        }
    }
}