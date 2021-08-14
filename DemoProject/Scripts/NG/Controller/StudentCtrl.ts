/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module DemoProjectExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        firstName: String;
        
    }
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        firstName: String;
        lastName: String;
        rollNumber: Number;
        myDate: any;
        
        getStudent() {
            
        }
        $scope: DemoProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: DemoProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.firstName = "Sumit";
            this.lastName = "Patel";
            this.rollNumber = 3333;
            this.$scope.firstName = "Darshan";
            this.myDate = new Date();
            $scope.getStudent = () => {
                this.showMessage("show message");
            }


            this.$scope.getStudent();
            this.getStudent();
        }

        $onInit() {
            this.getStudent();
            this.$scope.getStudent();
        }

        private init(): void {
        }


    
    }
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
}

