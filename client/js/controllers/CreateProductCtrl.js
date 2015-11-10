app.controller('CreateProductCtrl', function($scope, $modalInstance, Product) {



    $scope.ok = function() {

        $scope.loading = true;
        if ($scope.newProduct.type === 'NEW') {
            $scope.newProduct.classType = "label label-danger";
        } else if ($scope.newProduct.type === 'FEATURED') {
            $scope.newProduct.classType = "label label-warning";
        } else {
            $scope.newProduct.classType = "label label-success";
        }
        $scope.newProduct.reviews = [];
        // $scope.products.push(newProduct);
        Product
            .create($scope.newProduct)
            .$promise
            .then(function() {
                $scope.loading = false;
                $modalInstance.close($scope.newProduct);

            });

    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});
