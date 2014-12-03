angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider,$locationProvider){

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false //Fixes error:nobase $location in HTML5 mode requires a tag to be present!
    });

    //Angular main route
    $routeProvider
        .when('/',
        {templateUrl: '/partials/main/main'
            , controller: 'angMainCtrl'});

});