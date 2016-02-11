var module = angular.module('myIonicApp.controllers');

module.controller('HomeCtrl',function($scope,$http,$ionicPopup,ApiEndpoint){
    $scope.header = "Welcome to the galaxy's finest smugglers";
    $scope.smuglers = [];
    $http({
      method: 'GET',
      url: ApiEndpoint.url+ 'smugglers/',
    }).then(function successCallback(response) {
        $scope.smuglers = [];
        for(var r in response.data) {
          var smugler = response.data[r];
          $scope.smuglers.push(smugler);
        }
        console.log($scope.smuglers);
    }, function errorCallback(response) {
        console.log("ERROR");
    });
    $scope.getDetails = function(smugler){
        var url = ApiEndpoint.url + smugler.id+'/';
        $http.get(url).then(function successCallback(response){
            var alertPopup = $ionicPopup.alert({
              title: 'More details',
              template: ''+smugler.name+' '+smugler.lastname+' is a '+response.data+'',
            });
        },function errorCallback(response){
            console.log("ERROR");
        });
    }
})
