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
    var PathwayCtrl = /** @class */ (function (_super) {
        __extends(PathwayCtrl, _super);
        function PathwayCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.$scope = $scope;
            // this.firstName = "Sumit";
            // this.lastName = "";
            // this.rollNumber = 3333;
            //  this.$scope.firstName = "Darshan";
            //   this.myDate = new Date();
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500,
                special: true,
                tos: true
            };
            $scope.getStudent = function () {
            };
            _this.$scope.getStudent();
            _this.getStudent();
            return _this;
        }
        // firstName: String;
        // lastName: String;
        // rollNumber: Number;
        // myDate: any;
        PathwayCtrl.prototype.getStudent = function () {
        };
        PathwayCtrl.prototype.$onInit = function () {
            this.getStudent();
            this.$scope.getStudent();
        };
        PathwayCtrl.prototype.init = function () {
        };
        return PathwayCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.PathwayCtrl = PathwayCtrl;
    PathwayCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('PathwayCtrl', PathwayCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=StudentCtrl.js.map