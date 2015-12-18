var steamControllers = angular.module('steamControllers', []);

steamControllers.controller('steamCtrl', ['$scope', 'steamWebAPI', function($scope, steamWebAPI) {
	steamWebAPI.getAppList().success(function(data) {
		$scope.apps = data.applist.apps; 	
	});
}]);