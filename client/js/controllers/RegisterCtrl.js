app.controller('RegisterCtrl',['$scope','User','$state','UserFactory',
	function($scope,User,$state,UserFactory){
		$scope.createUser = function(){
			console.log($scope.newUser);
			User.create({
				username: $scope.newUser.username,
				email: $scope.newUser.email,
				password: $scope.newUser.password
			},function(user){
				console.log(user);
				User.login({
					email: $scope.newUser.email,
					password: $scope.newUser.password
				},function(accessToken){
					//Login succeded
					UserFactory.set(accessToken.user.id,accessToken.id);
					toastr.success('Welcome ' + $scope.newUser.username);
					$state.go('home');
				});

			},function(err){
        console.log(err);
        toastr.warning('Email address already in use');
        $scope.newUser.email = '';
      });
		}
}]);
