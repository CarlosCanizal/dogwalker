'use strict';

angular.module('app.controllers')
  .controller('SplashCtrl', ['$scope','Facebook', function($scope, Facebook) {
    Facebook.loadSDK();
  }])
  .controller('LogInCtrl', ['$scope', function($scope) {
    $scope.user = {};
  }])
  .controller('LogInFormCtrl', ['$scope', '$state', 'Auth','Facebook', function($scope, $state, Auth, Facebook) {
    
    $scope.response = {error:false, message:""};

    $scope.logIn = function(){
      $scope.response.error = false;
      if($scope.logInForm.$valid){
        Auth.logIn($scope.user).then(
          function(user){
            console.log(user);
            $state.go("dashboard");
          },function(error){
            console.log(error);
            $scope.response.error = true;
            $scope.response.message = error.message;
          }
        );
      }
    };

    $scope.facebookLogIn = function(){
      Facebook.logIn().then(function(user){
        console.log(user);
        $state.go("dashboard");
      },function(error){
        alert(error.message);
      });
    };

    $scope.getCssClasses = function(ngModelController) {
      return {
        error: ngModelController.$invalid && ngModelController.$dirty,
        success: ngModelController.$valid && ngModelController.$dirty
      };
    };

    $scope.showError = function(ngModelController, error) {
      return ngModelController.$error[error] && ngModelController.$dirty ;
    };
    
  }])
  .controller('SignUpCtrl', ['$scope', function($scope) {
    $scope.user = {};
  }])
  .controller('SignUpFormCtrl', ['$scope','$state', 'Auth', function($scope, $state, Auth) {
    
    $scope.response = {error:false, message:""};

    $scope.signUp = function(){
      $scope.response.error = false;
      
      if($scope.user.password !== $scope.confirm_password){
        $scope.response.error = true;
        $scope.response.message = "Password does not match.";
        return false;
      }

      if($scope.signUpForm.$valid){
        Auth.signUp($scope.user).then(
          function(user){
            console.log(user);
            $state.go("userType");
          },function(error){
            console.log(error);
            $scope.response.error = true;
            $scope.response.message = error.message;
          }
        );
      }
    };

    $scope.getCssClasses = function(ngModelController) {
      return {
        error: ngModelController.$invalid && ngModelController.$dirty,
        success: ngModelController.$valid && ngModelController.$dirty
      };
    };

    $scope.showError = function(ngModelController, error) {
      return ngModelController.$error[error] && ngModelController.$dirty ;
    };
    
  }])
  .controller('RecoveryController', ['$scope','$state', 'User', function($scope, $state, User) {
  }])
  .controller('ForgotPasswordCtrl', ['$scope','$state', 'User', function($scope, $state, User) {
    $scope.response = {};
    $scope.response.error = false;
    $scope.resetPassword = function(){
      $scope.response.error = false;
      if($scope.resetPasswordForm.$valid){
        User.resetPassword($scope.recovery_email).then(function(){
          console.log("success");
        },function(error){
          console.log(error.message);
          $scope.response.error = true;
          $scope.response.message = error.message;
        });
      }
    };

    $scope.getCssClasses = function(ngModelController) {
      return {
        error: ngModelController.$invalid && ngModelController.$dirty,
        success: ngModelController.$valid && ngModelController.$dirty
      };
    };

    $scope.showError = function(ngModelController, error) {
      return ngModelController.$error[error] && ngModelController.$dirty ;
    };

  }]);
  
