describe("Login Testing", function() {
	// start at root before every test is run
 it('should have a title', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('"Client"');
  });
});


