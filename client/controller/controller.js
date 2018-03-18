app.module('app_ex15').controller('myCtrl', function($scope) {
	$scope.sayHello = function() {
		console.log($scope.variable);
	}
});