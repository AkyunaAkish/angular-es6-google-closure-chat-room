export default () => {
  return {
    restrict: 'E',
    scope: {},
    template: require('../templates/home_template.html'),
    controllerAs: 'vm',
    controller: 'HomeController'
  }
}
