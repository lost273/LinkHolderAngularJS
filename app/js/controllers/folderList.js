angular.module("sportsStore")
    .controller("folderListCtrl", function ($scope, $filter) {

        var selectedFolder = null;

        $scope.selectCategory = function (newFolder) {
            selectedFolder = newFolder;
        }

        $scope.folderFilterFn = function (folder) {
            return selectedFolder == null ||
                folder.name == selectedFolder;
        }
    });