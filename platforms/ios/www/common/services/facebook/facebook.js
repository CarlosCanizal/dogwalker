app
.factory('Facebook', ['$q','Parse','Auth', function($q, Parse, Auth){

  return{

    loadSDK : function(){
      window.fbAsyncInit = function() {
          Parse.FacebookUtils.init({
              appId      : '234275086774510',
              status     : true,
              cookie     : true,
              xfbml      : true
          });
      };

      (function(d){
          var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement('script'); js.id = id; js.async = true;
          js.src = "https://connect.facebook.net/en_US/all.js";
          ref.parentNode.insertBefore(js, ref);
      }(document));
    },
    facebookConnectPlugin : function(){
      var deferred = $q.defer();
      var object = this;

      facebookConnectPlugin.login(["basic_info"],
        function(userData){
          var accessToken = userData.authResponse.accessToken;
          var userID = userData.authResponse.userID;

          var expirationDate = object.getExpiration();

          authData = {
              "id":userID,
              "access_token": accessToken,
              "expiration_date": expirationDate
          };

          Parse.FacebookUtils.logIn(authData).then(function(user){
            deferred.resolve(user);
          },function(error){
            deferred.reject(error);
          });
        },
        function (error) {
          deferred.reject(error);
        }
      );
      return deferred.promise;
    },
    logIn :function(){
      var deferred = $q.defer();
      if(window.cordova){
        this.facebookConnectPlugin().then(function(user){
          deferred.resolve(user);
        },function(error){
          deferred.reject(error);
        });
      }else{
        Parse.FacebookUtils.logIn(null,{
          success: function(user){
            deferred.resolve(user);
          },
          error: function(user,error){
            error.message = "User cancelled the Facebook login or did not fully authorize.";
            deferred.reject(error);
          }
        });
      }

      return deferred.promise;

    },
    getExpiration : function(){
      var time = new Date();
      time.setDate(time.getDate()+60);
      year = time.getFullYear();
      month = time.getMonth()+1;
      month = month<10?('0'+month):month;
      day = time.getDate();
      day = day<10?('0'+day):day;
      hours = time.getHours();
      minutes = time.getMinutes();
      seconds = time.getSeconds();
      miliseconds = time.getMilliseconds();
      return year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+miliseconds+"Z";
    }
  };

}]);