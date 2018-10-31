import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer'
import MapContainer from './MapContainer'


class App extends Component {
  constructor(){
    super();
    this.state = {
      quakeData: []
    }
  }
  getQuakes = async () => {
    try {
      const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')

      const earthquakesJson = await earthquakes.json();
      return earthquakesJson;

    } catch(err) {
      return err
    }
  }
componentDidMount() {
  this.getQuakes().then((earthquakes) => {
    console.log(earthquakes, ' this is data');

  this.setState({quakeData: earthquakes.features})
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <QuakeContainer quakeData={this.state.quakeData} />
        </div>
      </div>
    );
  }
}


export default App;
