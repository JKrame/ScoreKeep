import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
//common convention is to place each component within a ui folder inside of imports.

export default class PlayerList extends React.Component{
    
    renderPlayers(){
        if(this.props.players.length === 0)
        {
            return (
                <div className='item'>
                        <p className='item__message item__message--last-item'> Add your first player to get started!</p>
                </div>
                    )
        }
        else{
                return this.props.players.map((player) => {
                    return <Player className='item' key={player._id} player={player}/>;
                });
        }
    }
    render(){
        return (
                <div>
                    <FlipMove maintainContainerHeight={true}>
                        {this.renderPlayers()}
                    </FlipMove>
                </div>
        )
    };
}


PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}