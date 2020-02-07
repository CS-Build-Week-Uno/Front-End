import React from "react";


function MapTile(props) {
	return <div className={`tile ${getTileSprite(props.tile)}`}></div>;
}

function MapRow(props) {
	return props.tiles.map(tile => <MapTile tile={tile} />);
}

function getTileSprite(type) {
	switch (type) {
		case "e":
			return "e";
		case "n":
			return "n";
		case "ne":
			return "ne";
		case "ns":
			return "ns";
		case "nse":
			return "nse";
		case "nw":
			return "nw";
		case "nwe":
			return "nwe";
		case "nws":
			return "nws";
		case "nwse":
			return "nwse";
		case "s":
			return "s";
		case "se":
			return "se";
		case "solid":
			return "solid";
		case "w":
			return "w";
		case "we":
			return "we";
		case "ws":
			return "ws";
		case "wse":
			return "wse";
	}
}

function Map(props) {
	return (
		<div
			style={{
				position: "relative",
				width: "640px",
				height: "640px",
				top: "0px",
				left: "0px"
			}}
		>
			{props.tiles.map(row => (
				<MapRow tiles={row} />
			))}
		</div>
	);
}

export default Map;
