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
      //Modificar el usuario obtenerlo del current;
      user.set("type",type);
      user.save().then(function(user){
        deferred.resolve(user);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    },
    getPhoneCode: function(number){
      var deferred = $q.defer();
      var user = Parse.User.current();

      var Phone = Parse.Object.extend("Phone");
      var query = new Parse.Query(Phone);
      var object = this;
      var code = this.generateCode(6);

      query.equalTo("user", user);
      query.equalTo("number", number);
      var params = {
        "user":user,
        "number":number,
        "code":code
      };

      query.first().then(function(phone){

        if(phone){
          object.savePhone(phone,params).then(
            function(phone){
              deferred.resolve(phone);
            },function(error){
              deferred.reject(error);
            });
        }else{
          var phone = new Phone();
          object.savePhone(phone,params).then(
            function(phone){
              deferred.resolve(phone);
            },function(error){
              deferred.reject(error);
            });
        }
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise;
    },
    savePhone: function(phone,params){
      var deferred = $q.defer();

      phone.save(params).then(function(phone){
        deferred.resolve(phone);
      },function(error){
        deferred.reject(error);
      });

      return deferred.promise;

    },
    generateCode: function(length){
       number ="";
      for(var i=0;i<length;i++)
          number += Math.floor(Math.random()*10);
      return number;
    }
  };

}]);