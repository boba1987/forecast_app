portfolioApp.factory('twitterService', ['$q', '$timeout', '$http', function($q, $timeout, $http){
	var deferred = $q.defer();
	/** Get tweets service */
	function getTwitterData(hashtag){
		$http.get("http:/tweets/" + hashtag).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
        return deferred.promise;
	};

	return{
		getTwitterData: getTwitterData
	}
}])