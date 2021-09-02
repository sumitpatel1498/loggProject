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
    var GroupViewCtrl = /** @class */ (function (_super) {
        __extends(GroupViewCtrl, _super);
        function GroupViewCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.GroupData = function () {
                _this.dataSvc.filterByGroup(_this.$scope.project).then(function (data) {
                    var Project = new Array(100);
                    _this.SortByGroup = data;
                    console.log(data);
                    _this.SortByGroup = data;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            _this.GroupData();
            return _this;
        }
        GroupViewCtrl.prototype.$onInit = function () {
        };
        GroupViewCtrl.prototype.init = function () {
        };
        return GroupViewCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.GroupViewCtrl = GroupViewCtrl;
    GroupViewCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('GroupViewCtrl', GroupViewCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=GroupViewCtrl.js.map