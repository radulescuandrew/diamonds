app.controller('MainCtrl', ['$scope', 'UserFactory', 'User', '$state',
  function ($scope, UserFactory, User, $state) {
    $scope.user = UserFactory;
    $scope.menuTab = 1;

    $scope.logout = function () {
      localStorage.clear();
      $scope.user.userId = '';
      $scope.user.accessToken = '';
      // $state.go('home');
      $scope.menuTab = 1;
      toastr.success('Successfully logged out.');
    }
  }
]);
