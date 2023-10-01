import React, { Component } from 'react';
import { MapView } from './mymap';
import { Marker } from './mymap';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Maps extends Component{
  constructor(props) {
    super();
    const _this = this;
    _this.state = {};
  }

  render(a){
    const alpha = a || {};
    const _this = alpha.this || this;
    try{
      const testMarker = <Marker
        coordinate={{
          latitude: 37.01916578408898,
          longitude: -90.6841286402071
        }}
      >
        <MaterialCommunityIcons
          style={
            {
              position: "absolute",
              top: -5,
              left: -8
            }
          }
          name={"grave-stone"}
          size={12}
          onPress={(alpha) => {
            this.setState({showCallout: this.state.showCallout ? false : true});
            console.log("i got clicked")
          }}
        />

        {
          this.state.showCallout ? 
          <View style={{
            display: "flex",
            flex: 1,
            border: "1px solid #c2cfd5",
            top: 6,
            left: 4,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            width: 200,
            backgroundColor: "#f1f3f4",
            paddingLeft: 9,
            paddingTop: 2,
            paddingBottom: 4
          }}>
            <Text>{"marker.title"}</Text>
            <Text>
              {"marker.description"}
            </Text>          
          </View> : 
          <View/>
        }
      </Marker>

      return (
        <MapView
          provider="google"
          style={{ flex: 1 }}
          // loadingFallback={(whatthe)=>{alert(whatthe);}}
          googleMapsApiKey={_this.props.config.googleMapsAPIKey}
          mapType={"satellite"}
          initialRegion ={{
            //{latitude: 37.01926279698677, longitude: -90.68384219607877}
            latitude: 37.01930477165349,
            longitude: -90.68377566148438,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          minZoomLevel={18}
          onPress={(e)=>{
            console.log(e);
          }}
          // showsUserLocation={true}
        >
  
          {testMarker}
  
        </MapView>
      );

    }
    catch(err){
      console.log(err)
    }
  }
}
