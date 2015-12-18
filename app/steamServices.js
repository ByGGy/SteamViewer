var steamServices = angular.module('steamServices', []);

steamServices.service('steamWebAPI', ['$http', function($http) {  
    this.getAppList = function() {
      return $http.get('http://api.steampowered.com/ISteamApps/GetAppList/v002/?');
    };
      
    this.getNewsFor = function(appid) {
      return $http.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' + appid); 
    };
      
  }]);