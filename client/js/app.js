var app = angular.module('pro',
	['ngAnimate',
	'ui.bootstrap',
	'lbServices',
	'ui.router',
	'ngMessages',
	'wu.masonry',
	'angular-ladda',
	'angularMoment']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	

	$stateProvider

	.state('home',{
		url:'/home',
		templateUrl: 'templates/partial-home.html'
	})

	.state('products',{
		url: '/products',
		templateUrl: 'templates/products-all.html',
		controller: 'ProductsCtrl'
	})

	/*.state('products-id',{
		url: '/products/:productId',
		templateUrl: 'templates/product-info.html',
		controller: 'ProductsCtrl'
	}) 
*/

	.state('create-product',{
		url:'/create-product',
		templateUrl: 'templates/create-product.html',
		controller: 'ProductsCtrl'
	})

	.state('edit-product',{
		url:'/products/edit-product/:productId',
		templateUrl: 'templates/edit-product.html',
		controller: 'ProductsCtrl'
	})

	.state('login',{
		url:'/Users/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})

	.state('register',{
		url:'/Users/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	});
	
	$urlRouterProvider.otherwise('/home');
}]);
	

