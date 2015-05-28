var app=angular.module('feature',[]);
app.controller('myController',['$scope','$http', function($scope,$http){

    var refresh= function () {

        $http.get('/feature').success(function (response) {
            console.log('i recieved the Data');
            $scope.feature = response;
			 $scope.f="";

        });
    }
    refresh();


    $scope.add=function(featureAdd1)
    {
        $http.post('/feature',featureAdd1).success(function(response)
        {
            console.log(featureAdd1);
        });
      //  location.reload();
	  refresh();
    }

    $scope.remove=function(id)
    {
        $http.delete('/feature/'+id).success(function (response) {
            refresh();
        });
    }

    $scope.edit=function(id)
    {
        console.log(id);
        $http.get('/feature/'+id).success(function (response) {
            $scope.featureAdd=response;
			 refresh();
        });
    }

    $scope.update=function(featureAdd){

        $http.put('/feature/'+featureAdd._id,featureAdd).success(function (response) {
            refresh();
        });
    }

}]);

