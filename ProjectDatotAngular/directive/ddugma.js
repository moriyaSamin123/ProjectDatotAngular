﻿/// <reference path="ddugma.js" />
var app = angular.module("myApp", []);
app.directive("w3TestDirective", function () {
    return {
        restrict: "A",
        template: "<h1>Made by a directive!</h1>"
    };
});