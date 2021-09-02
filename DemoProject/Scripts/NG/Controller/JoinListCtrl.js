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
    var JoinListCtrl = /** @class */ (function (_super) {
        __extends(JoinListCtrl, _super);
        function JoinListCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.JoinData = function () {
                _this.dataSvc.filterByJoin(_this.$scope.project).then(function (data) {
                    _this.SortByJoin = data;
                    console.log(data);
                    _this.SortByJoin = data;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.$scope = $scope;
            _this.JoinData();
            return _this;
        }
        JoinListCtrl.prototype.$onInit = function () {
        };
        JoinListCtrl.prototype.init = function () {
        };
        return JoinListCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.JoinListCtrl = JoinListCtrl;
    JoinListCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('JoinListCtrl', JoinListCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=JoinListCtrl.js.map