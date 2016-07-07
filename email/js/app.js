var app=angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('index',{
		url:'/index',
		templateUrl:'pages/index.html'
	}).state('write',{
		url:'/write',
		templateUrl:'pages/write.html'
	}).state('write.pu',{
		url:'/pu',
		templateUrl:'pages/pu.html'
	}).state('write.pu.small-pre',{
		url:'/pu/small-pre',
		templateUrl:'pages/small-pre.html'
	})


$urlRouterProvider.otherwise('/index');

});