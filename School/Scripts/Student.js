var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    
    $scope.InsertData = () => {
        $scope.InsertData = function () {
            var Action = document.getElementById("btnSave").getAttribute("value");
            if (Action == "Submit") {
                $scope.Student = {};
                $scope.Student.FirstName = $scope.FirstName;
                $scope.Student.LastName = $scope.LastName;
                $scope.Studnet.FatherName = $scope.FatherName;
                $scope.Student.DateOfBirth = $scope.DateOfBirth;
                $scope.Student.City = $scope.City;
                $scope.Student.Address = $scope.Address;
                $scope.Student.Gender = $scope.Gender;
                $scope.Student.Pincode = $scope.Pincode;
                $scope.Student.Course = $scope.Course;
                $scope.Student.AddmissionDate = $scope.AddmissionDate
                $http({
                    method: "post",
                    url: "http://localhost:44318/Student/StudentList",
                    datatype: "json",
                    data: JSON.stringify($scope.Employe)
                }).then( (response) => {
                    alert(response.data);
                    $scope.GetAllData();
                    $scope.FirstName = "";
                    $scope.LastName = "";
                    $scope.FatherName = "";
                    $scope.DateOfBirth = "";
                    $scope.City = "";
                    $scope.Address = "";
                    $scope.Gender = "";
                    $scope.Pincode = "";
                    $scope.Course = "";
                    $scope.AddmissionDate = "";
                })
            }
            else {
                $scope.Stundent = {};
                $scope.Student.FirstName = $scope.FirstName;
                $scope.Student.LastName = $scope.LastName;
                $scope.Studnet.FatherName = $scope.FatherName;
                $scope.Student.DateOfBirth = $scope.DateOfBirth;
                $scope.Student.City = $scope.City;
                $scope.Student.Address = $scope.Address;
                $scope.Student.Gender = $scope.Gender;
                $scope.Student.Pincode = $scope.Pincode;
                $scope.Student.Course = $scope.Course;
                $scope.Student.AddmissionDate = $scope.AddmissionDate

                $scope.Stundent.StudentId = document.getElementById("StudentId").value;
                $http({
                    method: "post",
                    url: "http://localhost:44318/Student/StudentList",
                    datatype: "json",
                    data: JSON.stringify($scope.Student)
                }).then(function (response) {
                    alert(response.data);
                    $scope.GetAllData();
                    $scope.FirstName = "";
                    $scope.LastName = "";
                    $scope.FatherName = "";
                    $scope.DateOfBirth = "";
                    $scope.City = "";
                    $scope.Address = "";
                    $scope.Gender = "";
                    $scope.Pincode = "";
                    $scope.Course = "";
                    $scope.AddmissionDate = "";

                    document.getElementById("btnSave").setAttribute("value", "Submit");
                    document.getElementById("btnSave").style.backgroundColor = "cornflowerblue";
                    document.getElementById("spn").innerHTML = "Add New Employee";
                })
            }
        }
        $scope.GetAllData = function () {
            $http({
                method: "get",
                url: "http://localhost:44318/Student/StudentList"
            }).then(function (response) {
                $scope.employees = response.data;
            }, function () {
                alert("Error Occur");
            })
        };
    }
}