
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

      .state('councils', {
          url: '/councils',
          templateUrl: 'modules/datot/templates/councils.html',
          controller: 'councilsCtrl',
          controllerAs: 'vm'
        })
        .state('rav', {
            url: '/rav',
            templateUrl: 'modules/datot/templates/rav.html',
           
        })
        .state('users', {
            url: '/users',
            templateUrl: 'modules/datot/templates/users.html',

        })
        .state('lists', {
            url: '/lists',
            templateUrl: 'modules/datot/templates/lists.html',

        })


    //.state('rav', {
    //    url: '/rav',
    //    templateUrl: 'modules/datot/templates/rav.html',
    //    //controller: 'ravCtrl',
    //    //controllerAs: 'vm'
    //    })
    //.state('users', {
    //        url: '/users',
    //        templateUrl: 'modules/datot/templates/users.html',
    //        //controller: 'usersCtrl',
    //        //controllerAs: 'vm'
    // })
    //.state('users', {
    //        url: '/lists',
    //        templateUrl: 'modules/datot/templates/lists.html',
    //        //controller: 'listsCtrl',
    //        //controllerAs: 'vm'
    // })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        //.state('about', {
        //    // we'll get to this in a bit       
        //});

});