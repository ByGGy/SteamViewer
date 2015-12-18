var steamApp = angular.module('steamApp', ['ngMaterial', 'ngRoute', 'steamControllers', 'steamServices']);

steamApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/default', {
			templateUrl: 'MVVM/Default/steamView.html',
			controller: 'steamCtrl'
		}).
		otherwise({
			redirectTo: '/default'
		});
}]);

steamApp.config(['$mdThemingProvider', function($mdThemingProvider) {
   $mdThemingProvider.theme('default');
    // .primaryPalette('pink')
    // .accentPalette('orange');
 }]);