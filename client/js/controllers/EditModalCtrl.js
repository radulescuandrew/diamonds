app.controller('EditModalCtrl', function($scope, $modalInstance, prodToEdit, Product) {

    $scope.currentProd = angular.copy(prodToEdit);

    $scope.ok = function(currentProd) {
    	$scope.loading = true;
        if (currentProd.type === 'NEW') {
            currentProd.classType = "label label-danger";
        } else if (currentProd.type === 'FEATURED') {
            currentProd.classType = "label label-warning";
        } else {
            currentProd.classType = "label label-success";
        }
        currentProd.$save(function() {
                toastr.success('Product updated successfully!');
                // $state.go('products');
                $scope.loading = false;
                $modalInstance.close();
               
            });
        
    };

    $scope.cancel = function() {
        $modalInstance.dismiss($scope.currentProd.id);
    };
});
