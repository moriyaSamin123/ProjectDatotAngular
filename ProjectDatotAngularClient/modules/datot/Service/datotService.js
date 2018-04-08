(function () {
    'use strict';
    angular.module('app')
    .service('generalService', ['$http', function ($http) {
       var self=this
       self.getProducts = function () {
            $http.get('http://localhost:3405/api/rashi/getCouncils')
        .then(function (response) {
            alert("fyyfy")
            $scope.myWelcome = response.data;
        });
       }
    }]);
})();