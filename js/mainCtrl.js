angular.module('assessment')

.controller('mainCtrl', function($scope) {

})
.controller('shopCtrl', function($scope, mainService) {

	mainService.getProducts().then(function(response) {
		$scope.products = response;
	})

})
