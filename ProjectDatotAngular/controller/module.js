
var app = angular.module("myApp",[]);
app.controller("myGrid", function ($scope) {
    $scope.data = [
    {id:1, name: "meir", age: 25, email:"meir@gmail.com"},
    {id:2, name: "moshe", age: 21, email: "moshe@gmail.com"},
    {id:3, name: "shalom", age: 33, email: "shalom@gmail.com"},
    {id:4, name: "yosi", age: 18, email:"yosi@gmail.com"}]
});   