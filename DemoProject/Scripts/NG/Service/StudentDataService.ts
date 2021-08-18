/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/jQuery/jquery.d.ts" />

module DemoProjectExtension {

    import ajaxApi = Workpulse.Site.AjaxApi;


    export class StudentDataService {

        constructor(private httpService: ng.IHttpService, private qService: ng.IQService) {
        }



        postSkill(pathway: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44397/student/InsertClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    Workpulse.Site.Alert(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }

        getPathwayDetail(pathwayId: number): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44397/student/GetClientList";
            ajaxApi({
                url: apiUrl,
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    Workpulse.Site.Alert(xhr)
                    deferred.reject(xhr);
                }
            });
            return deferred.promise;
        }


        public static StudentDataServiceFactory($http: ng.IHttpService, $q: ng.IQService): StudentDataService {
            return new StudentDataService($http, $q);
        }
        
    }
}



