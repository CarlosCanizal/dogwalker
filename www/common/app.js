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
      controller: 'LoginCtrl'
    })
    .state('splash.register',{
      url: 'register',
      templateUrl: 'app/splash/register.tpl.html',
      controller: 'RegisterCtrl'
    });

  $urlRouterProvider.otherwise('/');

}]);

angular.module('app.controllers', [])
.config(function($sceProvider) {
  $sceProvider.enabled(false);
});

angular.module('app.services', []);
angular.module('app.directives', []);

