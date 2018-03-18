app_ex15.config(['$routeProvider', function($routeProvider){
	//nom du controlleur de la page --> inutile de la déclarer ds le HTML de la page
    $routeProvider
        .when('/homes',{templateUrl:'../template/enzo.html',controller:'controex15_1'})
		.when('formulaire',{templateUrl:'../template/ex15_2.html',controller:'controex15_2'})
		.when('article',{templateUrl:'../template/ex15_3.html',controller :'controex15_3'})
}]);