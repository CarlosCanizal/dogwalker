app
.factory('Phone', ['$q','Parse', function($q, Parse){

  return{
    save : function(params){
      var deferred = $q.defer();
      var Phone = Parse.Object.extend("Phone");
      var phone = new Phone();

      phone.save(params).then(function(phone){
        deferred.resolve(phone);
      },function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    }
  };

}]);