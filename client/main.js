import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

 
Meteor.startup(() => {
  //the tracker object will monitor all inside code for any changes during runtime, and re-run the code if a change is made.
  //this is how we update our view when a change occurs within our database!
  Tracker.autorun(() => {

      // Players.find().fetch() is the method for our mongoDB collection which returns an array of all player "documents" or "records" if we were using SQL jargon
      //Explaining the brackets within the find method.
      //The first method in the find parenthesis is a filter which filters data for a specifiic value in a specific field. this is required in order to utilize the second pair of brackets.
      //we left this empty so that no results are filtered. If we were to place "Score: 0", then the results will display only those documents with a score of 0.
      //the next bracket is a method on the find as specified in the meteor mongo arguments
      //documentation available at: docs.mongodb.com (search sorting)
      //                     or at: docs.meteor.com
      let players = Players.find({}, {sort: {score: -1}}).fetch();      
      let positionedPlayers = calculatePlayerPositions(players);
      let title = 'Score Keeper';

      //JSX is the inline javascript HTML which we will render to the client below using the ReactDOM.render method

      ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));

  });
});