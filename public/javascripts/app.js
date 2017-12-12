var app = angular.module('indexPage', []);
app.controller('myController', function ($scope, $http) {
    $scope.message = "";
    $scope.Submit = function () {
        console.log($scope.peopleId);
        var request = $http.get('/data/' + $scope.peopleId);
        request.success(function (data) {
            $scope.data = data;
        });
        request.error(function (data) {
            console.log('err');
        });

    };
});
