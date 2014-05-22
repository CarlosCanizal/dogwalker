'use strict';

angular.module('app', ['ionic', 'app.controllers', 'app.services','app.directives'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('splash',{
      url: '/',
      templateUrl: 'app/splash/splash.tpl.html',
      controller: 'SplashCtrl'
    });

  $urlRouterProvider.otherwise('/');

}]);

angular.module('app.controllers', [])
.config(function($sceProvider) {
  $sceProvider.enabled(false);
});

angular.module('app.services', []);
angular.module('app.directives', []);

