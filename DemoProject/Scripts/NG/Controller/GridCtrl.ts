/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />
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
    export class GridCtrl extends wp.angularBase.BaseCtrl implements angular.IController {
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
            this.$mdDialog = $mdDialog;
            
            this.ClientId = $("#hiddenid").val();
           
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
               
                this.ClientGrid();
               
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        
 
        ClientGrid = () => {
            
            $("#gridContainer").dxDataGrid({
               
                dataSource: this.clientList,
                keyExpr: "ClientId",

                columns: [
                    { caption: "Description", dataField: "Description" },
                    { caption: "Name", dataField: "ClientName" },
                    { caption: "Email", dataField: "ClientEmail" },
                    { caption: "Project", dataField: "Project" },
                    { caption: "Rate", dataField: "Rate", alignment:"center"},
                    { caption: "Terms and Conditions", dataField: "TermsAndService" },
                    { caption: "Special", dataField: "special" },
                    {
                        caption: "Action",
                        width: "auto",
                        cellTemplate: (container, options) =>
                        {
                            container.addClass("chart-cell");
                            console.log("rows click", options.data);

                          
                            $("<div/>").dxButton({                               
                                icon: "edit",
                                type: "default",
                                text: "Edit",                                
                                onClick:  (e) => {
                                    this.ShowInfo(options.data.ClientId, "Update");
                                }
                            }).appendTo(container);

                       
                            $("<div/>").dxButton({
                                icon: "trash",
                                type: "danger",
                                text: "Delete",
                                onClick:  (e) => {
                                    this.DeleteClient(options.data.ClientId);
                                }
                            }).appendTo(container);

                      
                            $("<div/>").dxButton({
                                icon:"info",
                                type: "success",
                                text: "View",
                                onClick:  (e) => {
                                    this.ShowInfo(options.data.ClientId, "View");
                                }
                            }).appendTo(container);
                        }
                    },
                    $("#SortByName").dxButton({
                        icon: "sortdown",
                        text: "Name",
                        onClick: (e) => {
                            this.FilterName();
                        }
                    },
                    $("#filter").dxButton({
                        icon: "filter",
                        text: "App Project",
                        onClick: (e) => {
                            this.ClientFilter();
                        }
                    },
                        $("#grouping").dxButton({
                        icon: "group",
                        text: "Group",
                        onClick: (e) => {
                          this.GroupData();
                            }
                        },
                            $("#joining").dxButton({
                                icon: "collapse",
                                text: "Joins",
                                onClick: (e) => {
                                    this.GroupData();
                                }
                            },


                 ))))],
                showBorders: true,

            });
            
        }

        InsertClient = () => {
            this.dataSvc.postSkill(this.$scope.project).then((data) => {

                this.showMessage("Client Added Successfully");
                this.$scope.project = null;
                console.log(data);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }


        ViewClient = (id, vw) => {
            this.ShowInfo(id, vw);
            console.log(id);           
        }
       
        
        UpdateClient = (id, vw) => {
            this.ShowInfo(id, vw);           
        }

       
       
   
        DeleteClient = (ClientId) => {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete')
                .textContent('If you delete you will lose all your data permanently')
                .ariaLabel('')
                .targetEvent(null)
                .ok('Yes Delete')
                .cancel('Cancel');
            this.$mdDialog.show(confirm).then(() => {
                this.dataSvc.deleteClient(ClientId).then((data) => {
                    this.showMessage("Deleted Successfully");
                    console.log(data);
                    this.getClientList();

                }).catch((error) => {
                    console.log(error);
                }).finally(() => {

                })
            }, () => {
            });
        }

        ShowInfo = (id: number, vw: string) => {
            window.location.href = "/Student/Edit?ClientId=" + id + "&ViewData=" + vw;
        }

        FilterList: IStudentModel[];
        ClientFilter = () => {
            this.dataSvc.Filter(this.$scope.project).then((data) => {
                this.FilterList = data;
                console.log(data);
                this.clientList = data;
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        SortByName: IStudentModel[];
        FilterName = () => {
            this.dataSvc.filterByName(this.$scope.project).then((data) => {
                this.SortByName = data;
                console.log(data);
                this.clientList = data;
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        SortByGroup: IStudentModel[];
        GroupData = () => {
            this.dataSvc.filterByGroup(this.$scope.project).then((data) => {
                this.SortByGroup = data;
                console.log(data);
                this.clientList = data;
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

        SortByJoin: IStudentModel[];
        JoinData = () => {
            this.dataSvc.filterByGroup(this.$scope.project).then((data) => {
                this.SortByJoin = data;
                console.log(data);
                this.clientList = data;
                this.ClientGrid();

            }).catch((error) => {
                console.log(error);
            }).finally(() => {

            })
        }

    }
    GridCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];

    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', StudentDataService.StudentDataServiceFactory]);
    app.controller('GridCtrl', GridCtrl);
}