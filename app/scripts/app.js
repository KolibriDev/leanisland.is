'use strict';

angular.module('leanisland.isApp', ['ngRoute']).config(function ($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/skraning', {
            templateUrl: 'views/skraning.html',
            controller: 'MainCtrl'
        })
        .when('/dagskra', {
            templateUrl: 'views/dagskra.html',
            controller: 'MainCtrl'
        })
        .when('/namskeid', {
            templateUrl: 'views/namskeid.html',
            controller: 'MainCtrl'
        })
        .when('/um-opid-rymi', {
            templateUrl: 'views/um_opid_rymi.html',
            controller: 'MainCtrl'
        })
});
