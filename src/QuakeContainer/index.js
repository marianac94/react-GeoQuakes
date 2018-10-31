import React, { Component } from 'react';


class QuakeContainer extends Component {
  render() {
    const quakeList = this.props.quakeData.map((quakeData, i) => {
      return(
        <li key={i}>
          <p> Title: {quakeData.properties.title} </p>
          <p> Coordinates: {quakeData.geometry.coordinates} </p>
          <p> Time: {quakeData.properties.time} </p>
        </li>
      )
    });

    return (
      <div>
        <ul>
          <h3>Earthquakes from the past week:</h3>
          {quakeList}
        </ul>
      </div>
    )
  }
}


export default QuakeContainer;
