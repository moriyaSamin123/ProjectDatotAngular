
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        //controller: 'dugmaCtrl',
       // controllerAs: 'vm'
    })
    .state('dugma', {
        url: '/dugma',
        templateUrl: 'modules/datot/templates/dugma.html',
        controller: 'dugmaCtrl',
        controllerAs: 'vm'
    })
      .state('login', {
          url: '/dugma',
          templateUrl: 'modules/datot/templates/login.html',
          controller: 'loginCtrl',
          controllerAs: 'vm'
      })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        //.state('about', {
        //    // we'll get to this in a bit       
        //});

});