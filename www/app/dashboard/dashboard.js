'use strict';

angular.module('app.controllers')
.controller('DashboardCtrl', ['$scope', '$state', 'User', function($scope, $state, User) {

  //find a way to refactor this
  if(!User.isAuthenticated())
    $state.go('splash');

  var user = Parse.User.current();
  if(!user.get('type'))
    $state.go('userType');

}]);