
(function () {
    'use strict';
    var app = angular.module('myApp', []);
    app.controller('dugmaCtrl', function ($scope, $http) {
        var self = this;

        $scope.fun = "ggg"
          //  function () {
           // alert("Fdsfdsfa")
        self.fir = "עככע";

        $scope.getList = function () {
            alert("נכנסתי לפונקציה");
            $http.get('http://localhost:3405/api/rashi/getCouncils')
            .then(function (response) {
                alert(response)
                $scope.res = response.data;
            },
            function (error) {
                alert("כשלון");
            });
        }

    });
})();