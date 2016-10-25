angular.module('somenoteApp').controller('zc',['$scope','$http','server','$state',function($scope,$http,server,$state){
	$scope.add=function(){
		//alert($scope.updata.username)
		$http({
			method:'post',
			url:server+'/users',
			data:$scope.updata
		}).success(function(e){
			//debugger
			$cookieStore.put("username",$scope.updata.username);
			$state.go('denglu')
		})
	}
	
}])