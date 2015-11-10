app.controller('ProductInfoModalCtrl', function($scope, $modalInstance, productId, Product) {

    $scope.currentProd = productId;

    $scope.addReview = function(currentProd) {
        $scope.text = this.textComment;
        currentProd.reviews.unshift({
            image: 'http://lorempixel.com/50/50/people/6',
            text: $scope.text,
            date: new Date()
        });
        $scope.product = Product
            .findById({
                id: currentProd.id
            }).$promise
            .then(function(res) {
                console.log(currentProd.id);
                res.reviews.unshift({
                    image: 'http://lorempixel.com/50/50/people/6',
                    text: $scope.text,
                    date: new Date()
                });

                res.$save();
            });
        this.textComment = '';
    };

     $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});
