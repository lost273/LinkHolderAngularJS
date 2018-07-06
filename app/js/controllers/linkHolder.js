angular.module("linkHolder")
.constant("dataUrl","http://localhost:5000/api/values")
.controller("linkHolderCtrl", function ($scope, $http, dataUrl) {

    $scope.data = {};
    console.log(1);
    $http.get(dataUrl)
        .then(function (response) {
            $scope.data.folders = response;
            console.log(1);
        },function (error) {
            $scope.data.error = error;
            console.log(error);
        });
});