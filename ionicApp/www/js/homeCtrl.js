var module = angular.module('healthNWellness.controllers');

module.controller('HomeCtrl',function($scope,$http,$ionicPopup){
    $scope.header = "Welcome to the galaxy's finest smugglers";
    $scope.state = {};
    $scope.state.nogLoggedIn = false;
    if(localStorage["username"] == undefined ||
    localStorage["username"] == null){
        $scope.state.nogLoggedIn = true;
    }
    //DEBUG CODE: PLEASE REMOVE FROM PROD
    $scope.smuglers = [];
    $scope.state.showRoads = true;
    $http({
      method: 'GET',
      url: '/api/smugglers/',
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
        var url = '/api/smuggler/'+smugler.id+'/';
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
