app
.factory('Facebook', ['$q','Parse', function($q, Parse){

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
    logIn : function(){
      Parse.FacebookUtils.logIn(null, {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");
            } else {
                alert("User logged in through Facebook!");
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
      });
    }
  };

}]);