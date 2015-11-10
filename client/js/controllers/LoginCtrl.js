app.controller('LoginCtrl',['$scope','UserFactory','User','$state',
	function($scope,UserFactory,User,$state){

	$scope.login = function(){
		// console.log($scope.user.email);
		// UserFactory.set($scope.user.email);
		$scope.loading = true; //start loading
		User.login({
			email: $scope.user.email,
			password: $scope.user.password
		},function(accessToken){
			//console.log(accessToken.user.id);
			UserFactory.set(accessToken.user.id,accessToken.id);
			toastr.success('Welcome ' + $scope.user.email);
			$scope.loading = false;
			$state.go('products');
		},function(err){
      $scope.loading = false;
      //$scope.user.email = "";
      $scope.user.password = "";
      toastr.warning('Incorrect username or password');
    });
	}
}]);
