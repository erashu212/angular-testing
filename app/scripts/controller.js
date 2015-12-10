angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  }).controller('ForumController',['$http','$scope', function($http, $scope){
    var forum = this;
    this.Issues = [];

    forum.searchIssues = function(){
      var url = 'https://api.github.com/search/issues?q='+forum.SearchTerm+'+label:bug+language:javascript+state:open&sort=created&order=desc';
      $http.get(url).success(function(res){
         forum.Issues = res.items;
         forum.TotalCount = res.total_count;
      })
    }

  }]);

