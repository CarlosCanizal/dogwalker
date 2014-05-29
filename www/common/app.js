'use strict';

angular.module('app', ['ionic', 'app.controllers', 'app.services','app.directives'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('splash',{
      url: '/',
      templateUrl: 'app/splash/splash.tpl.html',
      controller: 'SplashCtrl'
    })
    .state('splash.login',{
      url: 'login',
      templateUrl: 'app/splash/login.tpl.html',
      controller: 'LogInCtrl'
    })
    //signUp
    .state('splash.signUp',{
      url: 'signup',
      templateUrl: 'app/splash/signUp.tpl.html',
      controller: 'SignUpCtrl'
    })
    .state('splash.userType',{
      url: 'user_type',
      templateUrl: 'app/splash/userType.tpl.html',
      controller: 'UserTypeCtrl'
    })
    //dashboard
    .state('dashboard',{
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.tpl.html',
      controller: 'DashboardCtrl'
    });

  $urlRouterProvider.otherwise('/');

}]);

angular.module('app.controllers', [])
.config(function($sceProvider) {
  $sceProvider.enabled(false);
});

angular.module('app.services', []);
var app = angular.module('app.directives', []);

