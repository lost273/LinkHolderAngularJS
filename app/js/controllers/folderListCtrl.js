angular.module("linkHolder")
    .constant("folderListActiveClass", "btn-primary")
    .constant("Url","http://localhost:5000/api/values")
    .constant("linkListPageCount", 5)
    .controller("folderListCtrl", function ($scope, $http, Url, $location,$filter, 
        folderListActiveClass, linkListPageCount) {
        
        
        $http({
            method: 'GET',
            url: Url
            
        })
        .then(function (response) {
            $scope.folder = response;
            
            
        },function (error) {
            $location.path("/login");
            $scope.authenticationError = error;
            console.log(error.status);
            console.log($http.defaults.headers.common.Authorization);
        });

        var selectedFolder = null;

        $scope.selectedPage = 1;
        $scope.pageSize = linkListPageCount;
        $scope.selectFolder = function (newFolder) {
            selectedFolder = newFolder;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.folderFilterFn = function (folder) {
            return selectedFolder == null ||
                folder.name == selectedFolder;
        }
        $scope.getFolderClass = function(folder){
            return selectedFolder == folder ? folderListActiveClass : "";
        }
        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? folderListActiveClass : "";
        }
    });