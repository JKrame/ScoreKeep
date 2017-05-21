import React from 'react';
import {Players} from './../api/players';

//common convention is to place each component within a ui folder inside of imports.

export default class AddPlayer extends React.Component{
    
    handleSubmit(e){
      // prevent full page refresh
        e.preventDefault();

        //target the form box via the name attribute and get the name by referencing value.
        let playerName = e.target.playerName.value;

        //if the value for the player's name is not empty, reset the form and insert the player's name into our mini mongo db 
        //which will eventually sync with our main mongoDB
        if(playerName){
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }  
    }

    render(){
        return (
            <div className="item">
                 <form className='form' onSubmit={this.handleSubmit}>
                     <input className='form__input' type ="text" name="playerName" placeholder="Player Name"/>
                     <button className='button'>Add Player</button>
                 </form>      
            </div>
        );
    }
};
