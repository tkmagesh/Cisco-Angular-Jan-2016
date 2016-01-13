console.log("greet Module");
angular
    .module("myApp.greet", ["ngRoute"])
    .config(function($routeProvider){
        console.log("configuring greet router")
        $routeProvider.when("/greet", {
            templateUrl : "greet/greet.html",
            controller : "greetController"
        });
    })
    .controller("greetController", ['$scope', function($scope){
        $scope.name = '';
        $scope.message = '';
        $scope.greet = function(){
            $scope.message = 'Hi ' + $scope.name + ', Have a nice day!';
        }
    }]);
