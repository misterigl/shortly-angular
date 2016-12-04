angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  // $scope.link.url;

  $scope.addLink = function () {
    console.log('addLink called');
    return Links.addOne($scope.link);
  };
});
