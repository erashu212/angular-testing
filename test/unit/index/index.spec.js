describe('angularjs homepage forum list', function() {
	beforeEach(module('todoApp'));
	describe("should search the git hub issues based on search term", function() {
		var scope,
		ctrl;

		beforeEach(inject(function($rootScope, $controller, $http) {
			scope = $rootScope.$new();
			ctrl = $controller('ForumController as forum', 
					{
						$http: $http,
						$scope: scope
					});
		}));

		it("search the git hub issue", function() {
			ctrl.searchTerm = 'as';
			expect(ctrl).toBeDefined();
			ctrl.searchIssues();
			expect(ctrl.Issues.count).not.toBe(0);
		});		
		
	});
});