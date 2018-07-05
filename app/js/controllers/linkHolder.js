angular.module("linkHolder")
.controller("linkHolderCtrl", function ($scope) {

    $scope.data = {
        folders:[
            {"id": 7, "name": "tstfldr", "myLinks": [
                {"id": 14, "description": "test1", "body": "test1"},
                {"id": 15, "description": "test2", "body": "test2"}]  
            },
            {"id": 4, "name": "tst", "myLinks": [
                {"id": 6, "description": "education test", "body": "www.tst.com"}]
            }
        ]
    };
});