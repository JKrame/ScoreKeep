import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  
   //this is a named (ES5) function
  /*
  let square = function(x) {
      return x*x;
  };
  */

  //this is an arrow declared (ES6) function.
  //arrow functions support a simplified expression syntax (long functions with multiple statements).
  /*
  let square = (x) => { 
    x+=1;
    return x*x
  };
  */

  //this is a one line function using arrow syntax. notice the simplified syntax.
  //let square = (x) => x*x;
  
  //console.log(square(10));


  //ES5
  /*
  let user ={
    name: 'Andrew',
    sayHi: function(){
      console.log(this.name);
    }
  };
  */

  //ES6
  /*
  let user = {
    name: 'Andrew',
    sayHi(){
      console.log(arguments);
    }
  };
  */

});


/*
let user = {
  name: 'Jeremy',
  location: 'Florida',
  age: 0
};

//this is a "spread" operator which implants the user object into the person object.
//setting the age property within person overrides the age property of the user. Order matters in this regard.
let person = {
  ... user,
  age: 24
};

console.log(person)
*/