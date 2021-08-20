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
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }
                
            });
            return deferred.promise;
        }

        getPathwayDetail(): ng.IPromise<IStudentModel[]> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel[]>();
            var apiUrl = "https://localhost:44397/student/GetClientList";
            ajaxApi({
                type: 'GET',
                url: apiUrl,
                success: (response: IStudentModel[]) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                } 
            });
            return deferred.promise;
        }
        deleteClient(ClientId :number): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44397/student/DeleteClient" + ClientId;
            ajaxApi({
                url: apiUrl,
                type: 'GET',      
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
                    deferred.reject(xhr);
                }

            });
            return deferred.promise;
        }
        updateSkill(pathway: IStudentModel): ng.IPromise<IStudentModel> {
            var self = this;
            var deferred = self.qService.defer<IStudentModel>();
            var apiUrl = "https://localhost:44397/student/UpdateClient";
            ajaxApi({
                url: apiUrl,
                data: JSON.stringify(pathway),
                type: 'POST',
                contentType: 'application/json',
                success: (response: IStudentModel) => {
                    deferred.resolve(response);
                },
                error: (xhr) => {
                    console.log(xhr)
                    Workpulse.Site.AlertJS(xhr)
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



