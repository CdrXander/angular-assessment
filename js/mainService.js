angular.module('assessment').service('mainService', function($http, $q) {
	
	this.getProducts = function() {
		var deferred = $q.defer();

		var url = "http://practiceapi.devmounta.in/products";
		$http.get(url).success(function(response){
			var products =  response;
			deferred.resolve(products);
		})
		return deferred.promise;
	}
})