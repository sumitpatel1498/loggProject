/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var DemoProjectExtension;
(function (DemoProjectExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var LinqDataService = /** @class */ (function () {
        function LinqDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        LinqDataService.prototype.postSkill = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/studentapi/InsertClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        LinqDataService.prototype.getPathwayDetail = function () {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/studentapi/GetClientList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        LinqDataService.prototype.getInfoByid = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/studentapi/GetClientById/" + id;
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        LinqDataService.prototype.deleteClient = function (ClientId) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/studentapi/RemoveClient?ClientId=" + ClientId;
            ajaxApi({
                url: apiUrl,
                type: 'GET',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        LinqDataService.prototype.updateClient = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/studentapi/UpdateClient/";
            ajaxApi({
                url: apiUrl,
                type: 'POST',
                data: JSON.stringify(pathway),
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    console.log(xhr);
                    Workpulse.Site.AlertJS(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        LinqDataService.StudentDataServiceFactory = function ($http, $q) {
            return new LinqDataService($http, $q);
        };
        return LinqDataService;
    }());
    DemoProjectExtension.LinqDataService = LinqDataService;
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=StudentDataService.js.map