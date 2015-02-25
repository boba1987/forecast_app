portfolioApp.controller('portfolioOverviewController', ['$scope', '$timeout', 'twitterService', 
  function($scope, $timeout, twitterService){
    /** MOCK DATA - to be replaced with DB data! */
    var hastags = ['IBM', 'MICROSOFT', 'DOW JONES'], dataArr = [], descriptorObj;
    /** Show loader */
    $scope.loading = true;
  	/** Portfolio to show */
    $scope.portfolio = null;
    /** Getting twitter data */
    $scope.getTwitterData = function(stock){
      twitterService.getTwitterData(stock).success(function (data) {
        descriptorObj = {};
        descriptorObj.name = stock;
        descriptorObj.data = data;
        dataArr.push(descriptorObj);
        $scope.portfolio = dataArr;

        if(dataArr.length === hastags.length){
          /** Hide loader when all hashtags are loaded */
          $scope.loading = false;
        }
      }).error( function () {
        /** Trow error */
      });
    };
    (function getTwitter(hastags){
      for(var i=0;i<hastags.length;i++){
        $scope.getTwitterData(hastags[i]);
      }
    }(hastags));
  	/** No data to show message */
  	$scope.noData = false;
  	/** Data load timeout */
  	$timeout(function(){
  		
  	}, config.ajaxTimeout);
  }
]);