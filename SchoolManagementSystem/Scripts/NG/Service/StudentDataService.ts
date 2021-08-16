/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module SchoolManagementExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }

        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }

    }
}