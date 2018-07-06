angular.module("linkHolderAdmin")
.constant("tokenUrl","http://localhost:5000/api/account/token")
.controller("authCtrl", function ($scope, $http, tokenUrl) {

    $scope.authenticate = function (user, pass) {
        $http.post(tokenUrl, {username: user, password: pass})
            .then(function (response) {
                $scope.data.folders = response;
                console.log(response.access_token);
            },function (error) {
                $scope.data.error = error;
                console.log(error);
            });
    }
});