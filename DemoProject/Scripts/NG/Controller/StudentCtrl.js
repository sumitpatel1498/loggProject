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
            _this.InsertClient = function () {
                _this.dataSvc.postSkill(_this.$scope.project).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.GetClientList = function () {
                _this.dataSvc.getPathwayDetail().then(function (data) {
                    _this.clientList = data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.DeleteClient = function (ClientId) {
                _this.dataSvc.deleteClient(ClientId).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                });
            };
            _this.UpdateClient = function (ClientId) {
                window.location.href = "/Student/Edit/" + ClientId;
            };
            _this.$scope = $scope;
            // this.firstName = "Sumit";
            // this.lastName = "";
            // this.rollNumber = 3333;
            //  this.$scope.firstName = "Darshan";
            //   this.myDate = new Date();
            _this.infoId = Number($("#hdnInfoId").val());
            alert(_this.infoId);
            if (_this.infoId > 0) {
                //call the info api using service.
            }
            else {
                _this.GetClientList();
            }
            $scope.GetAllData = {};
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 1234,
                special: true,
                TermsAndService: true,
                clientEmail: 'sumit@gmail.com',
                clientName: 'Sumit',
                project: '',
            };
            return _this;
        }
        PathwayCtrl.prototype.$onInit = function () {
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