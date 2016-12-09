angular.module('assessment')

.controller('mainCtrl', function($scope) {

})
.controller('shopCtrl', function($scope, mainService) {
	mainService.getProducts().then(function(response) {
		$scope.products = response;
	})
})
.controller('detailCtrl', function($scope, $stateParams, mainService) {
	mainService.getProductById($stateParams.id).then(function(response) {
		$scope.product = response;
	})
})
