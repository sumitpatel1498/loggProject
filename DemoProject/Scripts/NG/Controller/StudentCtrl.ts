/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module DemoProjectExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        Project: String;
        Rate: String;
        TermsAndService: boolean;
        special: boolean;

        project: IStudentModel
        
    }
    export class PathwayCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;

        Description: String;
        ClientName: String;
        ClientEmail: String;
        Project: String;
        Rate: String;
        TermsAndService: boolean;
        special: boolean;


        $scope: DemoProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: DemoProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            // this.firstName = "Sumit";
            // this.lastName = "";
            // this.rollNumber = 3333;
            //  this.$scope.firstName = "Darshan";
            //   this.myDate = new Date();
            $scope.GetAllData = {

            }
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 1234,
                special: true,
                TermsAndService: true,
                clientEmail: 'sumit@gmail.com',
                clientName: 'Sumit',
                project: '',
            };

            this.GetClientList();
            // this.UpdateClient();
            
        }

        $onInit() {
        }

        private init(): void {
        }
       
        InsertClient = () => {
            this.dataSvc.postSkill(this.$scope.project).then((data) => {
                         
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        clientList: IStudentModel[];
        GetClientList = () => {
            this.dataSvc.getPathwayDetail().then((data) => {
                this.clientList = data;

                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        DeleteClient = (ClientId) => {
            this.dataSvc.deleteClient(ClientId).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        UpdateClient = () => {
            this.dataSvc.updateSkill(this.$scope.project).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
    }
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
}

