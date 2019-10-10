angular.module('portfolioApp', ['ngRoute','ngMaterial', 'ngMessages'])
.config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('portfolioPalette', {
        '50': 'ffffff', // background
        '100': 'B3E5FC',
        '200': '81D4FA',
        '300': 'A5B3FF', // primary 2
        '400': '29B6F6',
        '500': '3F51B5', // primary 1
        '600': 'e44c3d', // highlight
        '700': '0288D1',
        '800': 'eb7109', // primary 3
        '900': '01579B',
        'A100': 'ffffff', // accent 2 - menu background
        'A200': '3F51B5', // accent 1 - menu  font color 
        'A400': 'A5B3FF', // accent 3
        'A700': 'A5B3FF', // accent 4 
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('portfolioPalette')
        .accentPalette('portfolioPalette')
        .backgroundPalette('portfolioPalette')
      }])
  .controller('PortfolioController', function() {
    var vm = this;
    vm.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
      vm.addTodo = function() {
        vm.todos.push({text:vm.todoText, done:false});
        vm.todoText = '';
    };
 
    vm.remaining = function() {
      var count = 0;
      angular.forEach(vm.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    vm.archive = function() {
      var oldTodos = vm.todos;
      vm.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) vm.todos.push(todo);
      });
    };
  });