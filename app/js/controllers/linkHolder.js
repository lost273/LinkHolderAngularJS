angular.module("linkHolder")
.constant("tokenUrl","http://localhost:5000/api/account/token")
.controller("authCtrl", function ($scope, $location, $http, tokenUrl) {

    $scope.authenticate = function (user, pass) {
        
       
        $http({
            method: 'POST',
            url: tokenUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: user, password: pass}
        }).then(function (response) {
            $location.path("/main");
            $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.access_token;
            console.log(response.data.access_token);
        },function (error) {
            $scope.authenticationError = error;
        });
    }
});