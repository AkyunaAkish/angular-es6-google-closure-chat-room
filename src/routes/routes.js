export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state('/', {
    url: '/',
    template: '<home-directive></home-directive>'
  })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
