portfolioApp.factory('twitterService', ['$q', '$timeout', '$http', function($q, $timeout, $http){
	var deferred = $q.defer();
	/** Get tweets service */
	function getTwitterData(hashtag){
		var url = "http:/tweets/" + hashtag;

		return $http.get(
			url, {
				/** Transform data before sending to controller */
				transformResponse: function(data){
					return angular.fromJson(data, false);
				}
			}
		)
	};
	/** Parse each sting */
	function scanData(string){
		var string, criticalWords = {}, result = 50, i, prop, self;

		self = this;
		criticalWords.good = ['brand new', 'excited to see', 'launched ', 'future', 'deal to close', 'goes up', 'makes it easier', 'happy', 'started'];
		criticalWords.bad = ['milestone', 'stay away'];

		//parse string
		self.scanTweet = function(stringToParse){
			for(i=0;i<criticalWords.good.length;i++){
				//if some good critical work found, increse progress bar
				if( string.indexOf(criticalWords.good[i]) > -1 ){
					result = result - 10;
				}
			}

			for(i=0;i<criticalWords.bad.length;i++){
				//if some bad critical work found, decrese progress bar
				if( string.indexOf(criticalWords.bad[i]) > -1 ){
					result = result + 10;
				}
			}
		};

		//result needs to be a precentage to set the progressbar next to stock name
		string = string;
		self.scanTweet(string);

		if( result < 0 ){
			result = 0;
		}else if( result >= 100 ){
			result = 90;
		}

		return result;
	}
	/** Parse tweets */
	function scanTweetData(hashtags){
		return;
	}

	return{
		getTwitterData: getTwitterData,
		scanData: scanData
	}
}])