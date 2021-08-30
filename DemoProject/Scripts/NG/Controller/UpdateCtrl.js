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
    var UpdateCtrl = /** @class */ (function (_super) {
        __extends(UpdateCtrl, _super);
        function UpdateCtrl($scope, dataSvc, $timeout, $mdDialog, $mdSelect, $mdToast) {
            var _this = _super.call(this, $scope, $mdToast) || this;
            _this.dataSvc = dataSvc;
            _this.ViewClient = function (id) {
                console.log(id);
                _this.dataSvc.getInfoByid(id).then(function (data) {
                    console.log(data);
                    _this.$scope.project = data;
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateClient = function () {
                _this.dataSvc.updateClient(_this.$scope.project).then(function (data) {
                    _this.showMessage("Updated Sucesfully");
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.ShowInfo = function (id) {
                _this.dataSvc.getInfoByid(id).then(function (data) {
                    console.log(data);
                    _this.$scope.project = data;
                });
            };
            _this.$scope = $scope;
            _this.infoId = Number($("#hiddenid").val());
            _this.vw = $("#viewid").val() == "View" ? true : false;
            _this.ShowInfo(_this.infoId);
            $scope.GetAllData = {};
            return _this;
        }
        UpdateCtrl.prototype.$onInit = function () {
        };
        UpdateCtrl.prototype.init = function () {
        };
        return UpdateCtrl;
    }(wp.angularBase.BaseCtrl));
    DemoProjectExtension.UpdateCtrl = UpdateCtrl;
    UpdateCtrl.$inject = ['$scope', 'StudentDataService', '$timeout', '$mdDialog', '$mdSelect', '$mdToast'];
    var app = angular.module("studentApp", ['ngMaterial', 'ngMessages', 'ngSanitize']);
    app.factory('StudentDataService', ['$http', '$q', DemoProjectExtension.StudentDataService.StudentDataServiceFactory]);
    app.controller('UpdateCtrl', UpdateCtrl);
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=UpdateCtrl.js.map