using School.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School.Services
{
    public class StudentService
    {
        SchoolEntity StdEntity = new SchoolEntity();
        public List<StundentViewModel> GetStudentList()
        {
            var students = StdEntity.StudentRegistrations.Select(s => new StundentViewModel
            {
                StudentId = s.StudentId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                FatherName = s.FatherName,
                DateOfBirth = s.DateOfBirth,
                City = s.City,
                Address = s.Address,
                Gender = s.Gender,
                Pincode = s.Pincode,
                Course = s.Course,
                AddmissionDate = s.AddmissionDate
            }).ToList();
            return students;
        }
        public StundentViewModel GetStudentById(int id)
        {
            var student = StdEntity.StudentRegistrations.Where(s => s.StudentId == id).Select(s => new StundentViewModel
            {
                StudentId = s.StudentId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                FatherName = s.FatherName,
                DateOfBirth = s.DateOfBirth,
                City = s.City,
                Address = s.Address,
                Gender = s.Gender,
                Pincode = s.Pincode,
                Course = s.Course,
                AddmissionDate = s.AddmissionDate
            }).FirstOrDefault();
            return student;
        }
        public string UpdateStudent(StundentViewModel stdInfoDto)
        {
            var student = StdEntity.StudentRegistrations.Where(s => s.StudentId == stdInfoDto.StudentId).FirstOrDefault();
            if (student == null)
            {
                return "Student info not found.";
            }
            else
            {
                student.FirstName = stdInfoDto.FirstName;
                student.LastName = stdInfoDto.LastName;
                student.FatherName = stdInfoDto.FatherName;
                student.DateOfBirth = stdInfoDto.DateOfBirth;
                student.City = stdInfoDto.City;
                student.Address = stdInfoDto.Address;
                student.Gender = stdInfoDto.Gender;
                student.Pincode = stdInfoDto.Pincode;
                student.Course = stdInfoDto.Course;
                student.AddmissionDate = stdInfoDto.AddmissionDate;
                StdEntity.Entry(student).State = System.Data.Entity.EntityState.Modified;
                StdEntity.SaveChanges();
                return "Student updated successfully.";
            }
        }
    }
}