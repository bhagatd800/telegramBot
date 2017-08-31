var app = angular.module('login',[]);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller("loginController", ['$scope', function($scope){

    $scope.data={
        userName:'',
        password:''
    }

    $scope.submit=function(){
        alert(JSON.stringify($scope.data));
    }
}]);