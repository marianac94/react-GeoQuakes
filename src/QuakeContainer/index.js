import React, { Component } from 'react';


class QuakeContainer extends Component {
  render() {
    const quakeList = this.props.quakeData.map((quakeData, i) => {
      return(
        <li key={i}>
          <h4>Earthquakes from the past week:</h4>
          <p> Title: {quakeData.properties.title} </p>
          <p> Coordinates: {quakeData.geometry.coordinates} </p>
          <p> Time: {quakeData.properties.time} </p>
        </li>
      )
    });

    return (
      <div>
        <ul>
          <h1>Geo Quakes</h1>
          {quakeList}
        </ul>
      </div>
    )
  }
}


export default QuakeContainer;
