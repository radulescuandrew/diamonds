app.controller('ModalInstanceCtrl', function($scope, $modalInstance, prod, Product) {

    $scope.product = prod;
    
    $scope.ok = function() {
    	$scope.loading = true;
        Product
            .deleteById($scope.product)
            .$promise
            .then(function() {
            	$scope.loading = false;
            	$modalInstance.close();
            });

        //$modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss($scope.product.id);
    };
});
