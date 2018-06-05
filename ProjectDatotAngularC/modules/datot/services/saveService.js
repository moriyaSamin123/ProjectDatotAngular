
(function () {
    'use strict';
    angular.module("myApp").factory("saveService", saveService);
    saveService.$inject = ["$httpParamSerializer", "$q"];
    function saveService($httpParamSerializer, $q) {
        var obj = 0;
        var defer = $q.defer();
        defer.resolve(obj);
        return {
            getReshima: function (data) {
                defer = $q.defer();
                if (obj == data) {
                    defer.resolve(obj)
                }
                else {
                    //קריאה לשרות
                    $http.get('http://localhost:3405/api/rashi/getCouncils')
           .then(function (response) {
               alert(response)
               obj = response;
               defer.resolve(obj);
           },
           function (error) {
               alert("כשלון");
               defer.reject(error);
           });
                }
                return defer.promise;
            }
        }
    }
})