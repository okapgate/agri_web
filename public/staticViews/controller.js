app.controller('staticController', ['$scope','$localStorage','$location', function($scope, $localStorage, $location) {
    if($localStorage.isAdminLogin){
        $scope.logOut = "Logout";
    } else {
        $scope.logOut = "Login";
    }

    $scope.adminLogout = function(){
        localStorage.clear();
        $location.path("/admin/login");
    }
}]);