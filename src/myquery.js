(function () {

  var QueryWrapper = function (elems) {
    // TODO

    this.get = function(index) { // takes in an num for index
      return elems[index]; // will take object wrapped around the
    };   // the above will return an html element?

    this.length = elems.length;

    this.each = function(func) {
      for (var i = 0; i < elems.length; i++ ) {
        func(elems[i],i)
      }
      // $.each(elems, func);
      return this; // return object
    };

    this.hide = function() {
      // var css = elems.slice(1)
      // var html = document.getElementsByClassName(css)
      // html.style.display = 'none'

      for(var i = 0; i < elems.length; i++) {
        elems[i].style.display = "none";
      }
      //return elems.get(0); // why does't this work?
      return this;
    };

    this.show = function() {
      for(var i = 0; i< elems.length; i++ ) {
        elems[i].style.display = 'block';
      }
      return this; //return elems.get(0); // why does't this work?
    }

    // this.addClass = function(className) {
    //   for (var i = 0; i< elems.length; i++) {
    //     if(elems.className) {
    //       if(!elems.className.match(className)) {
    //         elems.className += " " + className;
    //       }
    //     } else {
    //       elems.className = className;
    //     }
    //   }
    //   return this;
    // }

    this.addClass = function(className) {
               // each takes in a function, with elem, what is elem?

      this.each(function(elem) {  //saying if elem has a class?
        if (elem.className) { // won't this always be true
          if ( !elem.className.match(className) ) { // if elem doesn't match the class to be added
            elem.className += " " + className; // add class name
          }
        } else {   // else, if there is no class to the element, add a class to it
          elem.className = className;
        }
      });
      return this;
    };

    // this.addClass = function(className) {
    //         // this is anon function
    //   this.each(function(elem) {
    //         // checks if elem has a class
    //     if (elem.className)) { // if className of element doesn't match class name to be added run block
    //       if (!elem.className.match(className)) {
    //         elem.className +=
    //       } // if element doesn't have a class that is to be added

    //     }
    //   });

    // };
                           //display         // none
      this.css = function(propertyOrObject, value) {
      if (typeof propertyOrObject == "object") { // checking if css can select one or many properties
                                                // if it is many then it will be an object, thus run block;
        for (var style in propertyOrObject) { // loop through propnames/keys in object(many here)
          this.each(function(elem) {   // for is looping through the key, values in object, each is looping through your html elements
                                       // therefore you need too loops
            elem.style[style] = propertyOrObject[style]; // each elem.style[style] can't do .style, will give .style as a string
          });               // $('.button').css({"border": "4px solid orange", "height": "200px"});
        }                   // object is {"border": "4px solid orange", "height": "200px"}
                            // so, style is border, height. property)rObject[style] is 4px solid sorange, 200px in each loop
      } else {              // so each   "div".style.border = 4px solid orange, then the next html in the array
        this.each(function(elem) {       // if it's only one property, ie. ('display','none') in function(propertyOrObject, value)
        elem.style[propertyOrObject] = value; // proeprty0rObject will equal display, value will be none
        });                                   // you need to do [propertyorObject] to acces the variable, .propetyorObject will be a string
      }
      return this;
    };



  };

  var myQuery = function (selector) {
    // TODO

    if (selector.indexOf("#") === 0) { // check if parameter has a hash, at index 0
      var newselector = selector.slice(1);
      // debugger;
      var element = document.getElementById(newselector);
      var array = [];
      array.push(element);
      return new QueryWrapper(array);
    } else if (selector.indexOf(".") === 0) {
      // debugger;
      var newselector = selector.slice(1);
      var element = document.getElementsByClassName(newselector);
      // var array = []; // ALREADY AN ARRAY!
      // array.push(element); // RUN TEST WITH NODE ON, TO SEE!
      console.log(element)
      return new QueryWrapper(element);

    } else {

      var element = document.getElementsByTagName(selector);
      return new QueryWrapper(element);
    }





  };

  window.$ = myQuery;

  $.each = function(array, func) {
    for (var i = 0; i <array.length; i++) {
      func(array[i],i);

    }

  };

  $.version = 'beta'


})();
