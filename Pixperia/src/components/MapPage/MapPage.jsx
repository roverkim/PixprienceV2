import React from 'react';
import MapContainer from '../common/TimelineMap/MapContainer';
import NavBar from '../common/NavBar/NavBar';

export default function MapPage() {
  return (
    <div style={{ 'background-color': '#a7cdf2' }}>
      <NavBar />
      <MapContainer />
    </div>
  );
}
