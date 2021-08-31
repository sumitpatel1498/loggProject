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
        LinqDataService.prototype.searchData = function (id) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/linq/searchClient/" + id;
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
        //joinData(id: number): ng.IPromise<IStudentModel> {
        //    var self = this;
        //    var deferred = self.qService.defer<IStudentModel>();
        //    var apiUrl = "https://localhost:44397/linq/searchClient/" + id;
        //    ajaxApi({
        //        type: 'GET',
        //        url: apiUrl,
        //        success: (response: IStudentModel) => {
        //            deferred.resolve(response);
        //        },
        //        error: (xhr) => {
        //            console.log(xhr)
        //            Workpulse.Site.AlertJS(xhr)
        //            deferred.reject(xhr);
        //        }
        //    });
        //    return deferred.promise;
        //}
        LinqDataService.StudentDataServiceFactory = function ($http, $q) {
            return new LinqDataService($http, $q);
        };
        return LinqDataService;
    }());
    DemoProjectExtension.LinqDataService = LinqDataService;
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=LinqDataService.js.map