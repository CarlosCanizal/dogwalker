'use strict';

angular.module('app.controllers')
.controller('DashboardCtrl', ['$scope', '$state', 'User', function($scope, $state, User) {

  //find a way to refactor this
  var user = User.isAuthenticated();
  if(!user)
    $state.go('splash');

  if(!user.get('type'))
    $state.go('userType');

  if(!user.get('Phone'))
    $state.go('verifyPhone');

  //find a way to refactor this

  



}]);