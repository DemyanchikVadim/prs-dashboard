import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import test from '../../../public/img/test.jpg';

const points =  [
  [53.707291, 23.843513],
  [53.700776, 23.833409],
  [53.678231, 23.824712],
  [53.672346, 23.808967],
  [53.675018, 23.776667]
];

const markerStyles = {
  width: '40px',
  height: '40px',
  overflow: 'hidden',
  border: '1px solid orange',
  background: '#FFF',
  borderRadius: '50%'
};

const mapState = {
  controls: ['default']
};

class Maps extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'100%'} state={mapState} center={[53.678122, 23.829825]} zoom={10}>
          {points.map(([lat, lon], i) =>  (
            <Marker key={'marker_' + i} lat={lat} lon={lon}>
              <MarkerLayout>
                <div style={markerStyles}>
                  <img src={test} alt="map" />
                </div>
              </MarkerLayout>
            </Marker>
          ))}
        </Map>,
      </div>
    )
  }
}

export default Maps;
