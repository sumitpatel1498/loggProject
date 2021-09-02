/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
module DemoProjectExtension {
    export interface IPathwayScope extends ng.IScope {
        loading: boolean;
        loadingTask: boolean;
        ClientId: number;
        Description: String;
        ClientName: String;
        ClientEmail: String;
        Project: String;
        Rate: String;
        TermsAndService: boolean;
        special: boolean;

        ProjectId: number;
        ProjectType: String;       
        DeveloperName: String;
        DeveloperEmail: String;




        project: IStudentModel
    }
    export class GroupViewCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
        Description: String;
        ClientId: number;
        ClientName: String;
        ClientEmail: String;
        Project: String;
        Rate: String;
        TermsAndService: boolean;
        special: boolean;


        ProjectId: number;
        ProjectType: String;      
        DeveloperName: String;
        DeveloperEmail: String;


        infoId: number;

        $scope: DemoProjectExtension.IPathwayScope;
        private $mdDialog: any;
        constructor($scope: DemoProjectExtension.IPathwayScope, private dataSvc: StudentDataService, $timeout, $mdDialog: any, $mdSelect: any, $mdToast: any) {

            super($scope, $mdToast);
            this.$scope = $scope;
            this.GroupData();

        }

        $onInit() {
        }

        private init(): void {
        }
              SortByGroup: IStudentModel[];
                GroupData = () => {
                    this.dataSvc.filterByGroup(this.$scope.project).then((data) => {
                        var Project: String[] = new Array(100);
                this.SortByGroup = data;
                console.log(data);
                this.SortByGroup = data;
               

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

    }
    GroupViewCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('GroupViewCtrl', GroupViewCtrl);
}

