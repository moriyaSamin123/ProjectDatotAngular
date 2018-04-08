(function () {
    'use strict'

    var module = angular.module("allApp", ["$scope", "$http", "$q", "$route",

    function dugmaCtrl() {
        var self = this;
        $scope.myWelcome = "gfgf";
        var d = $q.defer();
    //    $http.get('http://localhost:3405/api/rashi').then(
    //        function (response) {
    //            d.resolve(response);
    //            $scope.myWelcome = response.data;
    //        }, function (error) {
    //            alert(error)
    //            $scope.myWelcome = error.status;
    //            d.reject(error)

    //        }); return d.promise;
  
    //        module.controller("dugmaCtrl", dugmaCtrl);
   }]);

});
