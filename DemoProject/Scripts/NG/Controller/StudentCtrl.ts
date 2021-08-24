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

        infoId: number;

        $scope: DemoProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: DemoProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
           // this.GetClientList();
            
            $scope.project = {
                description: '',
                rate: 1234,
                special: true,
                TermsAndService: true,
                clientEmail: '',
                clientName: '',
                project: '',
            };

        }

        $onInit() {
        }

        private init(): void {
        }
       
        InsertClient = () => {
            this.dataSvc.postSkill(this.$scope.project).then((data) => {
                this.showMessage("client added successfully");
                this.$scope.project = null;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }      

        //clientList: IStudentModel[];
        //GetClientList = () => {
        //    this.dataSvc.getPathwayDetail().then((data) => {
        //        this.clientList = data;
        //        console.log(data);
        //    }).catch((error) => {
        //        console.log(error);
        //    }).finally(() => {

        //    })
        //}
        //DeleteClient = (ClientId) => {
        //    this.dataSvc.deleteClient(ClientId).then((data) => {
        //        this.showMessage("Deleted Successfully");
        //        console.log(data);
        //        this.GetClientList();
        //    }).catch((error) => {
        //        console.log(error);
        //    }).finally(() => {

        //    })
        //}
       

        //UpdateClient = (id) => {
        //    window.location.href = "/Student/Edit/" + id;
            
        //}
        
        //////View info
        //ViewClient = (id) => {
        //    this.ShowInfo(id);
        //    console.log(id);
        //    this.dataSvc.getInfoByid(id).then((data) => {
        //        console.log(data);
        //    }).catch((error) => {
        //        console.log(error);
        //    }).finally(() => {

        //    })
        //}
        //ShowInfo = (id: number) => {
        //    window.location.href = "/Student/viewInfo/" + id;
        //}
    }
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
}

