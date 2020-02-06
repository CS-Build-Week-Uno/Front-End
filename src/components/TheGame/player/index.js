import React, { Component } from "react";
import bounceMove from './BounceMoveClear.gif'
import {connect} from 'react-redux'
import handleMovement from './move'

function Player(props) {
	return (
		<div
			style={{
				position: "absolute",
				top: props.position[1],
				left: props.position[0],
                backgroundImage: `url(${bounceMove})`,
                backgroundPosition: '0 0',
                width: '30px',
				height:'30px',
				border:'1px solid white'
			}}
		/>
	);
}

function mapStateToProps(state) {
    return{
        // Spreading in all state for player, cause I'm lazy.
        ...state.player,
    }
}

export default connect(mapStateToProps) (handleMovement(Player));
