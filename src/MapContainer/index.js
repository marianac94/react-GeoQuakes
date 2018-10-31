import React, { Component } from 'react';
 import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

  class Mapcontainer extends Component {
    constructor(props) {
     super(props);
     this.state = {
       showingInfoWindow: false,
       activeMarker: {},
       selectedPlace: {}
     }
     // binding this to event-handler functions
     this.onMarkerClick = this.onMarkerClick.bind(this);
     this.onMapClick = this.onMapClick.bind(this);
   }
   onMarkerClick = (props, marker, e) => {
     this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
     });
   }
   onMapClick = (props) => {
     if (this.state.showingInfoWindow) {
       this.setState({
         showingInfoWindow: false,
         activeMarker: null
       });
     }
   }
   render(){
     const style = {
       width: '45%',
       height: '80%',
       position: 'relative'
     }

     return (
       <Map
          item
          xs = { 12 }
          style = { style }
          google = { this.props.google }
          onClick = { this.onMapClick }
          zoom = { 14 }
          initialCenter = {{ lat: 30.2682, lng: -97.74295 }}
        >
          <Marker
            onClick = { this.onMarkerClick }
            title = { 'Changing Colors Garage' }
            position = {{ lat: 30.2682, lng: -97.74295 }}
            name = { 'Changing Colors Garage' }
          />
          <InfoWindow
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }
          >

          </InfoWindow>
        </Map>
     )
   }
 }

  export default GoogleApiWrapper({
      apiKey: ('AIzaSyBciQMt5cKrU8qjTTho1uTqbfo63qIfArw')
  })(Mapcontainer)
