app
.factory('Auth', ['$q','Parse', function($q, Parse){

  return{
    
    signUp : function(params){
      var deferred = $q.defer();
      var user = new Parse.User();
      user.signUp(params).then(function(user){
        deferred.resolve(user);
      },function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    },
    logIn : function(params){
      var deferred = $q.defer();
      Parse.User.logIn(params.username, params.password)
      .then(function(user){
        deferred.resolve(user);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };

}]);