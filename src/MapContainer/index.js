import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 class Mapcontainer extends Component {
  render(){
    return (
     <div>
       <Map style={{width: '45%', height: '80%', position: 'relative'}} google={this.props.google} zoom={14} initialCenter={{lat: 30.2682, lng: -97.74295}}/>

       <Marker onClick={this.onMarkerClick}
             name={'Current Location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
        <div style={{width: '30%', height: '5%', position: 'relative'}}>
          <h1>input</h1>
        </div>
       </InfoWindow>
     </div>
    )
  }
}

 export default GoogleApiWrapper({
     apiKey: ('AIzaSyBciQMt5cKrU8qjTTho1uTqbfo63qIfArw')
 })(Mapcontainer)
