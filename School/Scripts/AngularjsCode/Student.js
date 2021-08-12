var app = angular.module("myApp", [])
.controller("myCtrl", function ($scope, $http) {

          

    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Student = {};
            $scope.Student.FirstName = $scope.FirstName;
            $scope.Student.LastName = $scope.LastName;
            $scope.Student.FatherName = $scope.FatherName;
            $scope.Student.DateOfBirth = $scope.DateOfBirth;
            $scope.Student.City = $scope.City;
            $scope.Student.Address = $scope.Address;
            $scope.Student.Gender = $scope.Gender;
            $scope.Student.Pincode = $scope.Pincode;
            $scope.Student.Course = $scope.Course;
            $scope.Student.AddmissionDate = $scope.AddmissionDate;
            $http({
                method: "post",
                url: "https://localhost:44318/Student/InsertStudent",
                datatype: "json",
                data: JSON.stringify($scope.Student)
            }).then((response) => {
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
            $scope.Student = {};
            $scope.Student.FirstName = $scope.FirstName;
            $scope.Student.LastName = $scope.LastName;
            $scope.Student.FatherName = $scope.FatherName;
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
                url: "https://localhost:44318/Student/UpdateStudent",
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
                document.getElementById("spn").innerHTML = "Add New Student";
            })
        }
    }

    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "https://localhost:44318/Student/GetAllStudent"
        }).then(function (response) {
            console.log(response);
            $scope.Student = response.data;
        }, function (error) {
            console.log(error)
            //alert("Error Occur");
        })
    };
    $scope.DeleteStudent = function (Std) {
        $http({
            method: "post",
            url: "http://localhost:44318/Student/DeleteStudent",
            datatype: "json",
            data: JSON.stringify(Std)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData();
        })
    };
    $scope.UpdateStd = function (Std) {
        document.getElementById("StudentId").value = Std.StudentId;
        $scope.FirstName = Std.FirstName;
        $scope.LastName = Std.LastName;
        $scope.FatherName = Std.FatherName;
        $scope.DateOfBirth = Std.DateOfBirth;
        $scope.City = Std.City;
        $scope.Address = Std.Address;
        $scope.Gender = Std.Gender;
        $scope.Pincode = Std.Pincode;
        $scope.Course = Std.Course;
        $scope.AddmissionDate = Std.AddmissionDate;
        document.getElementById("btnSave").setAttribute("value", "Update");
        document.getElementById("btnSave").style.backgroundColor = "Yellow";
        document.getElementById("spn").innerHTML = "Update Student Information";
    }    
});
