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
    var ViewCtrl = /** @class */ (function (_super) {
        __extends(ViewCtrl, _super);
        function ViewCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            //View info
            _this.ShowInfo = function (id) {
                _this.dataSvc.getInfoByid(id).then(function (data) {
                    console.log(data);
                    //window.location.href = "/student/viewInfo/" + id;
                });
            };
            _this.$scope = $scope;
            // this.firstName = "Sumit";
            // this.lastName = "";
            // this.rollNumber = 3333;
            //  this.$scope.firstName = "Darshan";
            //   this.myDate = new Date();
            _this.infoId = Number($("#hdnInfoId").val());
            _this.ShowInfo(_this.infoId);
            $scope.GetAllData = {};
            return _this;
        }
        ViewCtrl.prototype.$onInit = function () {
        };
        ViewCtrl.prototype.init = function () {
        };
        return ViewCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.ViewCtrl = ViewCtrl;
    ViewCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('ViewCtrl', ViewCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=ViewCtrl.js.map