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
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.dataGrid = function () {
                _this.$scope.getClientList = {
                    dataSource: DemoProjectExtension.StudentDataService,
                    keyExpr: "ID",
                    columns: ["Client Id", "Description", "Client Name", "Project", "Client Email", "Rate", "Terms And Conditons", "Special"],
                    showBorders: true
                };
            };
            _this.$scope = $scope;
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
    var app = angular.module("DemoApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('GridCtrl', GridCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=GridCtrl.js.map