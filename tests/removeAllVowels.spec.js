describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('removes all vowels and retains all consonants in a string', function(){
    var str = 'apples and oranges'
    var filtered = $filter('removeAllVowels')(str);
    expect(filtered).toEqual('ppls nd rngs');
  });

});
