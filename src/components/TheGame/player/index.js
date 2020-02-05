import React, { Component } from "react";
import bounceSprite from './bounceSprite.png'
import {connect} from 'react-redux'
import handleMovement from './move'

function Player(props) {
	return (
		<div
			style={{
				position: "absolute",
				top: props.position[1],
				left: props.position[0],
                backgroundImage: `url(${bounceSprite})`,
                backgroundPosition: '0 0',
                width: '30px',
                height:'30px',
			}}
		/>
	);
}

function mapStateToProps(state) {
    return{
        ...state.player,
    }
}

export default connect(mapStateToProps) (handleMovement(Player));
