'use strict'
angular.module('app.directives')
.directive('height100', function () {
  return {
    restrict: 'AC',
    link: function (scope, element, attrs){
      var height = document.body.offsetHeight;
      element.css({'height': height+"px"});
    }
  };
});