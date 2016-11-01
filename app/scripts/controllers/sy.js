angular.module('somenoteApp').controller('sy',['$scope','$http','server','$state','$stateParams','$cookieStore','$rootScope',function($scope,$http,server,$state,$stateParams,$cookieStore,$rootScope){


	$scope.logout=function(){
		$http({
			method:'post',
			url:server+'/users/logout',
			data:$scope.updata
		}).success(function(e){
			//debugger
	    $cookieStore.remove('usernam')
			$state.go('denglu')
		})
	}
	$scope.tz=function(){
		$state.go('tj')
		
		
	}
	
	$scope.arr=[]
	$scope.bq=function(aa){
		if($scope.arr.indexOf(aa)==-1){
		$('.sm').attr('class','label label-info sm')
		$scope.arr.push(aa)
		}else{
		$('.sm').attr('class','label label-success sm')
		$scope.arr.splice($scope.arr.indexOf(aa),1)
		}
		//alert($scope.arr)
	}
	$scope.zz=function(aa){
		if($scope.arr.indexOf(aa)==-1){
		$('.gx').attr('class','label label-info gx')
		$scope.arr.push(aa)
		}else{
		$('.gx').attr('class','label label-success gx')
		$scope.arr.splice($scope.arr.indexOf(aa),1)
		}
		//alert($scope.arr)
	}
	$scope.xx=function(aa){
		if($scope.arr.indexOf(aa)==-1){
		$('.fd').attr('class','label label-info fd')
		$scope.arr.push(aa)
		}else{
		$('.fd').attr('class','label label-success fd')
		$scope.arr.splice($scope.arr.indexOf(aa),1)
		}
		//alert($scope.arr)
	}
	$scope.cc=function(aa){
		if($scope.arr.indexOf(aa)==-1){
		$('.sx').attr('class','label label-info sx')
		$scope.arr.push(aa)
		}else{
		$('.sx').attr('class','label label-success sx')
		$scope.arr.splice($scope.arr.indexOf(aa),1)
		}
		//alert($scope.arr)
	}
	
	
	$scope.ad=function(){
		//alert($scope.updata)
		$('#tij').css('disabled','disabled')
		$http({
			method:'post',
			url:server+'/item',
			data:{'title':$scope.title,'content':$scope.content,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			//debugger
			//alert($scope.arr)
			$http({
			method:'post',
			url:server+'/tag',
			data:{"tag":$scope.arr,'tid':[e.id]}
		}).success(function(e){
			//debugger   
			$state.go('sy')
		})
			
		})
	}
	
  
	$scope.del=function(e){
		$http({
			url:server+"/item/"+e.id,
			method:"delete"
		}).success(function(){
			//debugger
			$scope.data.splice($scope.data.indexOf(e),1)
		})
	}
	$scope.eda=function(e){
		$scope.eddata = e
	}
	$scope.save=function(){
		$http({
			url:server+"/item/"+$scope.eddata.id,
			method:"put",
			data:$scope.eddata
		}).success(function(){
		})
	}
   var num=0
$scope.next=function(){
	num+=5
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":5,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			//debugger
			$scope.data=e
		})
	}
$scope.up=function(){
	num-=5
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":5,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			//debugger
			$scope.data=e
		})
	}
	$scope.adata=$stateParams
//	$http({
//		method:'get',
//			url:server+'/tag',
//			params:{"tag":$scope.arr}
//		}).success(function(e){
//			//debugger
//			//alert(e[6].tid)
//		
//		})
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":1,"$limit":5,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			//debugger
			$scope.data=e
		})
	
	
		
}])