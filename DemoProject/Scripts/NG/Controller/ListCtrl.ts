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
    export class ListCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;
        ClientId: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        Project: String;
        Rate: String;
        TermsAndService: boolean;
        special: boolean;

        infoId: number;
        project: IStudentModel;

        $scope: DemoProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: DemoProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.getClientList();
        }

        $onInit() {
        }

        private init(): void {
        }

        clientList: IStudentModel[];
        getClientList = () => {
            this.dataSvc.getPathwayDetail().then((data) => {
                this.clientList = data;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        ViewClient = (id) => {
            this.ShowInfo(id);
            console.log(id);
            this.dataSvc.getInfoByid(id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        UpdateClient = (id) => {
            this.ShowInfo(id);
            this.dataSvc.updateClient(id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        

         
        DeleteClient = (ClientId) => {
            this.dataSvc.deleteClient(ClientId).then((data) => {
                this.showMessage("Deleted Successfully");
                console.log(data);
                this.getClientList();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        ShowInfo = (id: number) => {
            window.location.href = "/Student/Edit?ClientId=" + id;
        }
       

        ////View info
        

        //getClientList = () => {
        //    this.dataSvc.updateClient(this.ClientId).then((data) => {
        //        this.$scope.project = data;
        //    }).catch((error) => {

        //    }).finally(() => {

        //    })
        //}
        //UpdateInfo = (ClientId: number) => {

        //    window.location.href = "/Student/Edit/" + ClientId;
        //}

    }
    ListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('ListCtrl', ListCtrl);
}