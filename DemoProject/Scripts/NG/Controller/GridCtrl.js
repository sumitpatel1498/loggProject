var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
/// <reference path="../../typings/devexpress-web/devexpress-web.d.ts" />
var DemoProjectExtension;
(function (DemoProjectExtension) {
    var GridCtrl = /** @class */ (function (_super) {
        __extends(GridCtrl, _super);
        function GridCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.getClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.clientList = data;
                    console.log(data);
                    _this.ClientGrid();
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ClientGrid = function () {
                $("#gridContainer").dxDataGrid({
                    dataSource: _this.clientList,
                    keyExpr: "ClientId",
                    columns: [
                        { caption: "Description", dataField: "Description" },
                        { caption: "Name", dataField: "ClientName" },
                        { caption: "Email", dataField: "ClientEmail" },
                        { caption: "Project", dataField: "Project" },
                        { caption: "Rate", dataField: "Rate", alignment: "center" },
                        { caption: "Terms and Conditions", dataField: "TermsAndService" },
                        { caption: "Special", dataField: "special" },
                        {
                            caption: "Action",
                            width: "auto",
                            cellTemplate: function (container, options) {
                                container.addClass("chart-cell");
                                console.log("rows click", options.data);
                                //edit
                                $("<div/>").dxButton({
                                    icon: "edit",
                                    type: "default",
                                    text: "Edit",
                                    onClick: function (e) {
                                        _this.ShowInfo(options.data.ClientId, "Update");
                                    }
                                }).appendTo(container);
                                //delete
                                $("<div/>").dxButton({
                                    icon: "trash",
                                    type: "danger",
                                    text: "Delete",
                                    onClick: function (e) {
                                        _this.DeleteClient(options.data.ClientId);
                                    }
                                }).appendTo(container);
                                //view 
                                $("<div/>").dxButton({
                                    icon: "info",
                                    type: "success",
                                    text: "View",
                                    onClick: function (e) {
                                        _this.ShowInfo(options.data.ClientId, "View");
                                    }
                                }).appendTo(container);
                            }
                        }
                    ],
                    showBorders: true,
                });
            };
            _this.InsertClient = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    _this.showMessage("Client Added Successfully");
                    _this.$scope.project = null;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ViewClient = function (id, vw) {
                _this.ShowInfo(id, vw);
                console.log(id);
            };
            _this.UpdateClient = function (id, vw) {
                _this.ShowInfo(id, vw);
            };
            _this.DeleteClient = function (ClientId) {
                var confirm = _this.$mdDialog.confirm()
                    .title('Are you sure you want to delete')
                    .textContent('If you delete you will lose all your data permanently')
                    .ariaLabel('')
                    .targetEvent(null)
                    .ok('Yes Delete')
                    .cancel('Cancel');
                _this.$mdDialog.show(confirm).then(function () {
                    _this.dataSvc.deleteClient(ClientId).then(function (data) {
                        _this.showMessage("Deleted Successfully");
                        console.log(data);
                        _this.getClientList();
                    }).catch(function (error) {
                        console.log(error);
                    }).finally(function () {
                    });
                }, function () {
                });
            };
            _this.ShowInfo = function (id, vw) {
                window.location.href = "/Student/Edit?ClientId=" + id + "&ViewData=" + vw;
            };
            _this.$scope = $scope;
            _this.$mdDialog = $mdDialog;
            _this.ClientId = $("#hiddenid").val();
            _this.getClientList();
            return _this;
        }
        GridCtrl.prototype.$onInit = function () {
        };
        GridCtrl.prototype.init = function () {
        };
        return GridCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.GridCtrl = GridCtrl;
    GridCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('GridCtrl', GridCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=GridCtrl.js.map