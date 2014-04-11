describe("myQuery", function () {

  beforeEach(function () {
    // `setFixtures` comes from the jasmine-jquery plugin.
    // Although *you* are not using jQuery, we use this plugin to
    // help us create HTML elements for testing.
    //
    // Key point: The HTML elements we create here are available
    // for our tests to select. They also get destroyed after each test.
    setFixtures(
      '<div id="profile" class="noice">' +
        '<div class="button first"></div>' +
        '<img class="avatar" />' +
        '<a class="button second"></a>' +
        '<a class="straggler"><label>Click meh</label></a>' +
      '</div>'
    );
  });
  // when you call version, on the window, or assign it a property name
  // you will get beta on it.
  it("has a version of value 'beta'", function() {
    expect($.version).toEqual('beta');
  });
  // on the window there is an each function
  // the each prop name is a function
  // it takes two takes two parameters
  // an array, and a function that takes a parameter
  // the each function will push into an empty array
  //
  describe("General each function", function () {
    it("iterates through an array", function () {
      var testResult = [];
      var someArray = [10, 20, 30];
      $.each(someArray, function (number) {
        testResult.push(number * number);  // is this the function(number)
      });                                  // being called here?
      // push is the function(number)?
      expect(testResult.length).toEqual(3);
      expect(testResult[0]).toEqual(100);
      expect(testResult[1]).toEqual(400);
      expect(testResult[2]).toEqual(900);
    });
  });

  describe("Selectors", function () {
       // $ = myQuery function
       // pass in '#profile'
       // get method on it, but remmber that
       //myQuery takes in a parameter and returns an object
       // a Querywrapper object
       // get is a method on an object
       // get is a property name of the myQuerry wrapper

    it("selects an element by id", function() {
      var elem = $('#profile').get(0); // get is a prop name of QueryWrapper object
      expect(elem.className).toEqual('noice'); // retreive's classname from that html selector
    });                                        // classname is an attribute for html elements

    it("selects elements by class name", function() {
      var buttons = $('.button'); // this will take in html, wrap around an object
      expect(buttons.length).toEqual (2) // since it's an object, need to make length proper name point to value
      expect(buttons.get(0).className).toMatch(/first/);
      expect(buttons.get(1).className).toMatch(/second/);
    });

    it("selects elements by tag name", function() {
      var anchors = $('a'); // take in html tag, in myQuery, turn to Querywrapper object
      expect(anchors.length).toEqual(2) // length on Querywrapper object
      expect(anchors.get(0).className).toEqual("button second"); // get(0) from an array, return html, className is
      expect(anchors.get(1).className).toEqual("straggler");

      var images = $('img');
      expect(images.length).toEqual(1)
      expect(images.get(0).className).toEqual("avatar");
    });
  });

  describe("Selected elements each function", function () {
    it("iterates through all selected elements", function() {
      var testResult = []; // empty array
      $('.button').each( function (elem, i) {  // one function that is anon, two parameters
        testResult.push(elem.className + ' ' + i); //anon function called here
      });

      // BELOW IS THE SAME THING, but not an anon func
      // var pushFunc = function (elem, i) {  // one function that is anon, two parameters
      //   testResult.push(elem.className + ' ' + i); //anon function called here
      // }
      // $('.button').each(pushFunc); // pushfunc needs two parameters
      // another element could have gone on line 70; after
      // curly brakcets
      expect(testResult.length).toEqual(2);       // length 2
      expect(testResult[0]).toEqual("button first 0");
      expect(testResult[1]).toEqual("button second 1");
    });
  })

  describe("Show and Hide", function () {
    // TODO: Write tests for .show() and .hide()
    it("hides the selected css element", function() {
      var hiddenButton = $('.button').hide(); // call hide for button
      expect(hiddenButton.get(0).style.display).toEqual('none') // expect display to be none
   });
    it("shows the selected css element", function() {
      $('.button').hide(); // first need to hide button, then
      var showButton = $('.button').show(); // call show on it, becaues hide is there
      expect($('.button').get(0).style.display).toEqual('block'); // expect block to be there
    });
  });

 describe("addClass", function () {
    // TODO: Write tests for addClass
    // HINT: Test using .toMatch() like the selector test
    it("adds a class to an element", function() {
      $('.button').addClass('poop'); // addClass is propname we make out
      expect($('.button').get(0).className).toMatch(/poop/); // toMatch is regex
    });  // addClass takes a parametr, the class to add.
        // toMatch is regular expression if class includes poop
        //

    it("does not allow two classes of the same name on an element", function () {
      $('.button').addClass('donkey');
      $('.button').addClass('donkey');
      expect($('.button').get(0).className).not.toMatch(/donkey donkey/);
    })
  });


 describe("Modifying CSS", function () {

    it("can set a single property", function() {
      // Ensure they're not already hidden
      expect( $('.button').get(0).style.display ).toEqual('');
      expect( $('.button').get(1).style.display ).toEqual('');

      // Now make sure displays have updated
      // you know you need to make a prop name called css
      // you know that it takes two parameters
      $('.button').css('display', 'none');
      expect( $('.button').get(0).style.display ).toEqual('none');
      expect( $('.button').get(1).style.display ).toEqual('none');
    });

    // TODO: (`it` without a function are pending tests)
    it("can set multiple properties in one call", function() {
      $('.button').css({"border": "4px solid orange", "height": "200px"});

      expect( $('.button').get(0).style.border ).toEqual("4px solid orange");
      expect( $('.button').get(0).style.height ).toEqual("200px");

      expect( $('.button').get(1).style.border ).toEqual("4px solid orange");
      expect( $('.button').get(1).style.height ).toEqual("200px");
    });
  });

});
