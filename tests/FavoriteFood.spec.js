describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  var people = [
    {name: 'jake',
    favoriteFood: 'burrito'},
    {name: 'judy',
    favoriteFood: 'salmon'},
    {name: 'libby',
    favoriteFood: 'burrito'}
  ];

  it('properly filters only people who match the favorite food', function(){
    var filtered = $filter('favoriteFood')(people, 'burrito');
    expect(filtered.length).toEqual(2);
    expect(filtered[1].name).toEqual('libby');
  });


	
});
