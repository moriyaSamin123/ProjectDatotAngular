(function () {
    'use strict';
    var app = angular.module("myApp", []);
    app.controller("dugmaCtrl", function ($scope, $http) {
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