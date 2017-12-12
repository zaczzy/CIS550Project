var app = angular.module('actorPage', []);
app.controller('actorController', function ($scope, $http) {
    $scope.message = "";
    $scope.Submit = function () {
        console.log($scope.actorName);
        var request = $http.get('/getActors/' + $scope.actorName);
        request.success(function (data) {
            $scope.data = data;
        });
        request.error(function (data) {
            console.log('err');
        });
    };
});