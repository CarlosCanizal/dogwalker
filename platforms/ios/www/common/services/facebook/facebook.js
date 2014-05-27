app
.factory('Facebook', ['$q','Parse','Auth', function($q, Parse, Auth){

  return{

    loadSDK : function(){
      // openFB.init('234275086774510');
      // window.fbAsyncInit = function() {
      //     Parse.FacebookUtils.init({
      //         appId      : '234275086774510',
      //         status     : true,
      //         cookie     : true,
      //         xfbml      : true
      //     });
      // };

      // (function(d){
      //     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      //     if (d.getElementById(id)) {return;}
      //     js = d.createElement('script'); js.id = id; js.async = true;
      //     js.src = "https://connect.facebook.net/en_US/all.js";
      //     ref.parentNode.insertBefore(js, ref);
      // }(document));
    },
    logIn : function(){
      var deferred = $q.defer();
      var fbLoginSuccess = function (userData) {
        var token = userData.authResponse.secret;
        alert(token);
        deferred.resolve(JSON.stringify(userData));
      };

      facebookConnectPlugin.login(["basic_info"],
        fbLoginSuccess,
        function (error) {
          deferred.reject(error);
        }
      );

      return deferred.promise;
    }
  };

}]);