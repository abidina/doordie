var app = angular.module("Doordie", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "app/partials/login.html",
            controller: "LoginController"
        })
        .when("/home",
        {
            templateUrl: "app/home.html",
            controller: "HomeController"
        })
        .when("/signup",
        {
            templateUrl: "app/partials/signup.html",
            controller: "SignUpController"
        });

}]);