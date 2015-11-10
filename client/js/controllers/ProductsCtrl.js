app.controller('ProductsCtrl', ['$scope', '$stateParams', 'Product', '$modal', '$state', 'User', 'UserFactory',
    function($scope, $stateParams, Product, $modal, $state, User, UserFactory) {
        $scope.tab = 1;

        $scope.products = [];

        $scope.productId = $stateParams.productId;

        $scope.isAdmin = false;

        User.getCurrent()
            .$promise
            .then(function(user) {
                $scope.isAdmin = user.isAdmin;
            });
        User.getCurrent().$promise.then(function(user) {
            console.log(user);
        });

        if (!UserFactory.accessToken) {
            $state.go('login');
        }

        function getProducts() {
            if (!$scope.productId) {
                Product
                    .find()
                    .$promise
                    .then(function(results) {
                        $scope.products = results;
                    });
            }
        };
        getProducts();

        $scope.openProduct = function(prodId) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '../../templates/productInfoModal.html',
                controller: 'ProductInfoModalCtrl',
                resolve: {
                    productId: function() {
                        return prodId;
                    }
                }
            });
        }



        //REMOVE PRODUCT WITH MODAL
        $scope.removeProduct = function(item) {

            Product
                .deleteById(item)
                .$promise
                .then(function() {
                    getProducts();
                });
        };

        $scope.open = function(product) {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '../../templates/modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    prod: function() {
                        return product;
                    }
                }
            });

            modalInstance.result.then(function() {
                toastr.error('Product was deleted!');
                getProducts();
            }, function(paramFromDismissState) {
                $scope.paramFromDismissState = paramFromDismissState;
                console.log(paramFromDismissState)
            });
        };
        //END OF REMOVE PRODUCT WITH MODAL


        //START EDIT WITH MODAL
        $scope.openEdit = function(product) {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '../../templates/editModal.html',
                controller: 'EditModalCtrl',
                resolve: {
                    prodToEdit: function() {
                        return product;
                    }
                }
            });

            modalInstance.result.then(function() {
                // $scope.updateProduct(updatedProduct);
                getProducts();
            }, function(badParam) {
                console.log('S-a apasat cancel pentru id-ul: ' + badParam);
            })
        };
        //END EDIT WITH MODAL
        /*--------------------------------------------*/
        //START CREATE PRODUCT WITH MODAL
        $scope.openCreate = function() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '../../templates/createProductModal.html',
                controller: 'CreateProductCtrl',
            });

            /*PROMISE */
            modalInstance.result.then(function(newProduct) {
                //$scope.products.push(newProduct);
                getProducts();
                toastr.success('Product added successfully!');
            }, function() {

            });
        };

        // $scope.addProduct = function(newProduct) {

        //     if (newProduct.type === 'NEW') {
        //         newProduct.classType = "label label-danger";
        //     } else if (newProduct.type === 'FEATURED') {
        //         newProduct.classType = "label label-warning";
        //     } else {
        //         newProduct.classType = "label label-success";
        //     }
        //     newProduct.reviews = [];
        //     // $scope.products.push(newProduct);
        //     Product
        //         .create(newProduct)
        //         .$promise
        //         .then(function(product) {
        //             /*$scope.newProduct = '';
        //             $scope.newProdForm.$setUntouched();
        //             $('.focus').focus();*/
        //             getProducts();

        //             toastr.success('Product added successfully!');
        //         });
        // };

        /* --------------- END CREATE WITH MODAL --------- */

    }
]);
