var modulo = angular.module('app', ['ngRoute']);

// configure our routes
modulo.config(function ($routeProvider, $httpProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'dugma.html',
            controller: 'dugmaCtrl'
        })

        //// route for the description page
        //.when('/:phoneName', {
        //    templateUrl: 'description.html',
        //    controller: 'descriptionController'
        //});


    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

});