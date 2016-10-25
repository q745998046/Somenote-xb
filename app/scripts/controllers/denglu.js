angular.module('somenoteApp').controller('dl',['$scope','$http','server','$state','$cookies','$cookieStore',function($scope,$http,server,$state,$cookies,$cookieStore){
	if($cookies.get('usernam',$scope.updata)){
		$state.go('sy')
	}
	$scope.dl=function(){
		$http({
			method:'post',
			url:server+'/users/login',
			data:$scope.updata
		}).success(function(e){
			debugger
			$state.go('sy')
			if($scope.abc==true){
				$cookieStore.put("usernam",$scope.updata);				
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 6);
				// Setting a cookie
				$cookies.put('usernam', $scope.updata, {'expires': expireDate});
			}
		})
	}
	
}])