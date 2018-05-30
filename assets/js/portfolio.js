angular.module('portfolioApp', [])
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