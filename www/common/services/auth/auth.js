app
.factory('Auth', ['$q','Parse', function($q, Parse){

  return{
    signUp : function(params){
      var deferred = $q.defer();
      var user = new Parse.User();

      console.log(params);

      user.signUp(params).then(function(user){
        deferred.resolve(user);
      },function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    }
  };

}]);