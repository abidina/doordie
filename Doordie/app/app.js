var app = angular.module("Doordie", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "app/login.html",
            controller: "loginController"
        })
        .when("/home",
        {
            templateUrl: "app/home.html",
            controller: "homeController"
        });

}]);