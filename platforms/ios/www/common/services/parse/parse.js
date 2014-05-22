angular.module('myApp.services')
.factory('Parse', function(){
  Parse.initialize('nsKr9xWe53IQ4C66OtZ9BQclKE0gxAcEwuXARl8Z',
                   '7Wmoi7N3imPmWgTpyzklSzYw2Riv2dt8fJVOc9R7');
  return Parse;
});