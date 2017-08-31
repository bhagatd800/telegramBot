var app = angular.module('token',[]);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller("tokenController", ['$scope', function($scope){

    $scope.data={
        tokenId:'',
        chatId:''
    }

    $scope.submit=function(){
        alert(JSON.stringify($scope.data));
    }
}]);