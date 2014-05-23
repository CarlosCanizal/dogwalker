'use strict';

angular.module('app.controllers')
  .controller('SplashCtrl', ['$scope', function($scope) {
    
  }])
  .controller('LoginCtrl', ['$scope', function($scope) {
    
  }])
  .controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.user = {};
    
  }])
  .controller('RegisterFormCtrl', ['$scope', 'Auth', function($scope, Auth) {
    
    $scope.registerUser = function(){
      Auth.signUp($scope.user).then(
        function(user){
          console.log(user);
        },function(error){
          console.log(error);
        }
      );
    };

    $scope.showError = function(ngModelController, error) {
      return ngModelController.$error[error];
    };
    
  }]);
