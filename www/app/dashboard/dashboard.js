'use strict';

angular.module('app.controllers')
.controller('DashboardCtrl', ['$scope', '$state', 'Phone', function($scope, $state, Phone) {

  var user = Parse.User.current();
  if(!user.get('type'))
    $state.go('splash.userType');


}]);