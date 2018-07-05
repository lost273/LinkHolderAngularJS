angular.module("linkHolder")
    .constant("folderListActiveClass", "btn-primary")
    .constant("linkListPageCount", 5)
    .controller("folderListCtrl", function ($scope, $filter, 
        folderListActiveClass, linkListPageCount) {

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