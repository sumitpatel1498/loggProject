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
    var LinqCtrl = /** @class */ (function (_super) {
        __extends(LinqCtrl, _super);
        function LinqCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.FilterClient = function (id) {
                console.log(id);
                _this.dataSvc.searchData(id).then(function (data) {
                    console.log(data);
                    _this.$scope.project = data;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ShowInfo = function (id) {
                _this.dataSvc.searchData(id).then(function (data) {
                    console.log(data);
                    _this.$scope.project = data;
                });
            };
            _this.$scope = $scope;
            _this.FilterClient;
            return _this;
        }
        LinqCtrl.prototype.$onInit = function () {
        };
        LinqCtrl.prototype.init = function () {
        };
        return LinqCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.LinqCtrl = LinqCtrl;
    DemoProjectExtension.ViewCtrl.$inject = ['$scope', 'LinqDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('LinqDataService', ['$http', '$q', DemoProjectExtension.LinqDataService.StudentDataServiceFactory]);
    app.controller('ViewCtrl', DemoProjectExtension.ViewCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=LinqCtrl.js.map