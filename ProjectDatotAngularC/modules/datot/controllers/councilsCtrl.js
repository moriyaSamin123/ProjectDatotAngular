
//(function () {
//    'use strict';
//    angular.module('myApp').controller("councilsCtrl", councilsCtrl);
//    councilsCtrl.$inject = ["$scope", "$http", "saveService"];
//    function councilsCtrl ($scope, $http, saveService) {
//        var self = this;

//        $scope.fun = "ggg"
//          //  function () {
//            alert("Fdsfdsfa")
//        //self.fir = "עככע";

//        //$scope.getList = function () {
//            alert("נכנסתי לפונקציה");
//            //saveService.getReshima.then(function (response) {
//            //        alert(response)
//            //        $scope.res = response.data;
//            //    },
//            //    function (error) {
//            //        $scope.res = response.data;
//            //        alert("כשלון");
//            //    });
//            $http.get('http://localhost:3405/api/rashi/getCouncils')
//            .then(function (response) {
//                alert(response)
//                $scope.councils = response.data;
//            },
//            function (error) {
//                alert("כשלון");
//            });
//        //}

//    }
//})();

(function () {
    'use strict';
    var app = angular.module("myApp", []);
    app.controller("councilsCtrl", function ($scope, $http) {
        
        $http.get('http://localhost:3405/api/rashi/getCouncils')
            .then(function (response) {
                $scope.councils = response.data;
            });
        $scope.orderByMe = function (x) {
            $scope.myOrderBy = x;
        }
        //$scope.itemsByPage = 15;

        //$scope.rowCollection = [];
        //for (var j = 0; j < 200; j++) {
        //    $scope.rowCollection.push(councils);
        //}
        // $scope.councils = ["aaa", "bbb"]
    });
})();