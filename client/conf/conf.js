angular.config(['$stateProvider', '$urlRouterProvider', function($routeProvider, $urlRouterProvider){
  let homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'assets/templates/ex15_1.html'
  }

  let formulaireState = {
    name: 'formulaire',
    url: '/formulaire',
    templateUrl: 'assets/templates/ex15_2.html'
  }
  let articleState = {
    name: 'article',
    url: '/article',
    templateUrl: 'assets/templates/ex15_3.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(formulaireState);
  $stateProvider.state(articleState);

  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
}]);