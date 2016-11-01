'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */
angular.module('somenoteApp', [ 'ngCookies','ui.router','ngCookies']).constant('server','http://www.somenote.cn:1510').controller("app",['$scope','$http','server',function ($scope,$http,server) {
  	// body...
 
  	}
  ]).config(function ($stateProvider,$urlRouterProvider){
  	$stateProvider.state("denglu",{
  		url:"/denglu",
  		templateUrl:"views/denglu.html",
  		controller:"dl"
  	})
  	.state("zhuce",{
  		url:"/zhuce",
  		templateUrl:"views/zhuce.html",
  		controller:"zc"
  	})
  	.state("sy",{
  		url:"/sy",
  		templateUrl:"views/sy.html",
  		controller:"sy"
  	})
  	.state("tj",{
  		url:"/tj",
  		templateUrl:"views/tj.html",
  		controller:"sy"
  	})
  	.state("ed",{
  		url:"/ed:tag?title&content",
  		templateUrl:"views/edit.html",
  		controller:"sy"
  	})
  	$urlRouterProvider.when('','/denglu')
  })
