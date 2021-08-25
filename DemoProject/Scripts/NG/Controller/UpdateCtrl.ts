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
    export class UpdateCtrl extends wp.angularBase.BaseCtrl implements angular.IController {        

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

            this.infoId = Number($("#hiddenid").val());
            this.ShowInfo(this.infoId);
           
            $scope.GetAllData = {

            }            
        }

        $onInit() {
        }

        private init(): void {
        }
        ViewClient = (id: number) => {
            console.log(id);
            this.dataSvc.getInfoByid(id).then((data) => {
                console.log(data);
                this.$scope.project = data;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        UpdateClient = () => {
            this.dataSvc.updateClient(this.$scope.project).then((data) => {
                this.showMessage("Updated Sucesfully");
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }
        
        ShowInfo = (id: number) => {
            this.dataSvc.getInfoByid(id).then((data) => {
                console.log(data);
                this.$scope.project = data;
            })
        }
    }
    UpdateCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('UpdateCtrl', UpdateCtrl);
}