var steamControllers = angular.module('steamControllers', []);

steamControllers.controller('steamCtrl', ['$scope', 'steamWebAPI', function($scope, steamWebAPI) {
	steamWebAPI.getAppList().success(function(data) {
		$scope.apps = data.applist.apps; 	
	});
	
	$scope.selectApp = function(appid)
	{
		steamWebAPI.getNewsFor(appid).success(function(data) {
			$scope.news = data.appnews.newsitems;
		})
	}
}]);