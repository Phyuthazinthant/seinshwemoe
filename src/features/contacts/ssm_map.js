import React, {Component} from 'react'
import {Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react'
// import lan from '../../configs/Language'
import './contactstyle.css';

export class ssm_map extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showingInfoWindow:false,
            activeMaker:{},
            selectedPlace: {}
        }
    }
    onMarkerClick=(e,props,marker)=>{
        this.setState({
            showingInfoWindow: true,
            activeMaker:marker,
            selectedPlace:props
        })
    }
    onClose=()=>{
        if(this.state.showingInfoWindow)
        {this.setState({
            showingInfoWindow:false,
            activeMaker:null
        })
        }
    }

    render(){
        // const clan ="en"
        return(
            <div>
                <div className="map-style">
                <Map
                 google={this.props.google}
                 zoom={18}
                 initialCenter={{lat:21.971649, lng:96.087196}}>
                     <Marker  onClick={this.onMarkerClick} name={"Sein Shwe Moe Gold and Jwellerry Shop"}/>
                     <InfoWindow marker={this.state.activeMaker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
                        <div><h3>{this.state.selectedPlace.name}</h3></div>
                    </InfoWindow>
                </Map>
            </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBgru9d8427Q2J_iNok_8dybJ5HRxxoSw0"
})(ssm_map);