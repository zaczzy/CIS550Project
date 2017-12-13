var app = angular.module('actorPage', []);
app.controller('actorController', function ($scope, $http) {
    $scope.message = "";
    $scope.sexes = ['male', 'female'];
    $scope.Submit = function () {
        var request = $http.get('actors/getActors/' + $scope.actorName +'/'+$scope.actorSex);
        request.success(function (data) {
            $scope.data = data;
        });
        request.error(function (data) {
            console.log('err');
        });
    };
});