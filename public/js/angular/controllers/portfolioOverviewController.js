portfolioApp.controller('portfolioOverviewController', ['$scope', '$timeout', 'twitterService',function($scope, $timeout, twitterService){
	/* Request twitter data; TO DO: this is a mockup */
	twitterService.getTwitterData('IBM').then(function(data){
		console.log(data);
	});
	/** Portfolio to show */
	$scope.portfolio = null;
	/** No data to show message */
	$scope.noData = false;
	/** Show loader */
	$scope.loading = true;
	/** Data load timeout */
	$timeout(function(){
		$scope.noData = true;
		$scope.loading = false;
	}, config.ajaxTimeout);
}]);