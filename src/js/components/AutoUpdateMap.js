import React from "react";


import * as MapActions from '../actions/MapActions';



export default class AutoUpdateMap extends React.Component {


  reloadMap() {
		MapActions.reloadMap();
	}

  componentDidMount() {
    setInterval(this.reloadMap, 300000); //reload Map every 5 minutes(in milliseconds)
  }

    render() {
        return(
            <div className="loader" />
        );
    }
}