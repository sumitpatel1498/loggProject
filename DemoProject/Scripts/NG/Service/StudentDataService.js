/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var DemoProjectExtension;
(function (DemoProjectExtension) {
    var ajaxApi = Workpulse.Site.AjaxApi;
    var StudentDataService = /** @class */ (function () {
        function StudentDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        //getPathwayDetail(pathwayId: number): ng.IPromise<IPathwayDto> {
        //    var self = this;
        //    var deferred = self.qService.defer<IPathwayDto>();
        //    var apiUrl = "https://localhost:44397/student";
        //    ajaxApi({
        //        url: apiUrl,
        //        success: (response: IPathwayDto) => {
        //            deferred.resolve(response);
        //        },
        //        error: (xhr) => {
        //            Workpulse.Site.Alert(xhr)
        //            deferred.reject(xhr);
        //        }
        //    });
        //    return deferred.promise;
        //}
        StudentDataService.prototype.postSkill = function (pathway) {
            var self = this;
            var deferred = self.qService.defer();
            var apiUrl = "https://localhost:44397/student/InsertClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (xhr) {
                    Workpulse.Site.Alert(xhr);
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        };
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        return StudentDataService;
    }());
    DemoProjectExtension.StudentDataService = StudentDataService;
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=StudentDataService.js.map