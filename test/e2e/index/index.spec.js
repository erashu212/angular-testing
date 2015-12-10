describe('angularjs forum git issues', function() {
	beforeEach(function() {
		browser.get('http://localhost:3333/app/main.html');
	});

	it("form should be available before pressing button / enter", function() {
		expect(element(by.name('gitIssueForm')).isDisplayed()).toBe(true);
	});

	it("should hide the form after pressing button / enter", function() {
		element(by.model('forum.SearchTerm')).sendKeys('as');
		element(by.className('btn-danger')).click();
		var elements = element.all(by.repeater('data in forum.Issues'));
		expect(elements.count()).toEqual(10);
	});
});