angular.module("linkHolder")
    .controller("folderListCtrl", function ($scope, $filter) {

        var selectedFolder = null;

        $scope.selectFolder = function (newFolder) {
            selectedFolder = newFolder;
        }

        $scope.folderFilterFn = function (folder) {
            return selectedFolder == null ||
                folder.name == selectedFolder;
        }
    });