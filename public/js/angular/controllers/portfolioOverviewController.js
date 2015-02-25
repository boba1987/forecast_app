portfolioApp.controller('portfolioOverviewController', ['$scope', '$timeout', 'twitterService',function($scope, $timeout, twitterService){
	/** Getting twitter data */
  twitterService.getTwitterData('IBM').success(function (data) {
        console.log(data);
    }).error( function () {
        console.log('FAILURE');
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