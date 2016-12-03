angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url;

  $scope.addLink = function (link) {
    console.log('addLink called');
    return Links.addOne(link);
  };
});
