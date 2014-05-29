angular.module('app.controllers')
.controller('UserTypeCtrl', ['$scope','$state','User', function($scope, $state, User) {

    //find a way to refactor this
    if(!User.isAuthenticated())
      $state.go('splash');

    $scope.setUserType = function(userType){

      var user = Parse.User.current();
      User.setType(user, userType).then(function(user){
        console.log(user);
        $state.go('dashboard');
      },function(error){
        console.log(error);
      });
    };
}]);