/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />
var DemoProjectExtension;
(function (DemoProjectExtension) {
    var StudentDataService = /** @class */ (function () {
        function StudentDataService(httpService, qService) {
            this.httpService = httpService;
            this.qService = qService;
        }
        StudentDataService.StudentDataServiceFactory = function ($http, $q) {
            return new StudentDataService($http, $q);
        };
        return StudentDataService;
    }());
    DemoProjectExtension.StudentDataService = StudentDataService;
})(DemoProjectExtension || (DemoProjectExtension = {}));
//# sourceMappingURL=StudentDataService.js.map