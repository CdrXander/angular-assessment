angular.module('assessment').directive('productDisplay', function() {

	var productController = ['$scope', function($scope) {
		$scope.hidePic = true;
		$scope.togglePic = function() {
			$scope.hidePic = !$scope.hidePic
		}
	}]

	return {
		restrict: "E",
		templateUrl: "./views/product-tmpl.html",
		scope: {
			product: '='
		},
		controller:productController
	}
})