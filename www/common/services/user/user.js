app
.factory('User', ['$q','Parse', function($q, Parse){

  return{

    isAuthenticated : function(){
      return Parse.User.current();
    },

    resetPassword : function(email){
      var deferred = $q.defer();
      Parse.User.requestPasswordReset(email).then(function(){
        deferred.resolve();
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    },

    setType : function(user,type){
      var deferred = $q.defer();
      user.set("type",type);
      user.save().then(function(user){
        deferred.resolve(user);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };

}]);