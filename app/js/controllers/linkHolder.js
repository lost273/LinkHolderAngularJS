angular.module("linkHolder")
.controller("linkHolderCtrl", function ($scope) {

    $scope.data = {
        folders:[
            {"id": 7, "name": "testfolder", "myLinks": [
                {"id": 14, "description": "test1", "body": "test1"},
                {"id": 15, "description": "test2", "body": "test2"}]  
            },
            {"id": 4, "name": "folder0", "myLinks": [
                {"id": 6, "description": "education test", "body": "www.tst.com"}]
            },
            {"id": 1, "name": "folder1", "myLinks": [
                {"id": 6, "description": "education ", "body": "www.tst.com"}]
            },
            {"id": 1, "name": "folder2", "myLinks": [
                {"id": 6, "description": "education ", "body": "www.tst.com"}]
            },
            {"id": 1, "name": "folder3", "myLinks": [
                {"id": 6, "description": "education ", "body": "www.tst.com"}]
            },
            {"id": 1, "name": "folder4", "myLinks": [
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"},
                {"id": 6, "description": "education ", "body": "www.tst.com"}]
            }
        ]
    };
});