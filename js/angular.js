var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
$scope.customers = [
  {name: 'ravali',city:'bangalore'},
  {name: 'sweety',city:'hyderabad'},
  {name: 'harshini',city:'chennai'}
];
$scope.message="hello!!";
});
