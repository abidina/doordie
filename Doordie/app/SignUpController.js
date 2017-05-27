(function () {
    angular.module('Doordie')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ["$scope"];

    function SignUpController($scope) {
        $scope.test = "testing sign up";
        console.log($scope);
    }
})();