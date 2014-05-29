app
.factory('User', ['$q','Parse', function($q, Parse){

  return{

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