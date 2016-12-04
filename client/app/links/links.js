angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  
  Links.getAll().then(function (data) {
    console.log(data);
    $scope.data.links = data;
  });

  // Links.getUser().then(function(users) {
  //   console.log('user', users);
  // }, function(err) {
  //   console.log('err', err);
  // });

});
