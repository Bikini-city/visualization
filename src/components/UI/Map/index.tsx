import React, { useState, useEffect, useRef, useCallback } from 'react';
import Compare from 'mapbox-gl-compare';
import ReactMapGL, { MapRef } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import * as Style from './styled';

const LNG = -86.89871737888747;
const LAT = 40.41866254968954;
const ZOOM = 12;

interface MapProps {
  children?: React.ReactElement;
  isCompare: boolean;
}

function Map({ children, isCompare }: MapProps) {
  const [viewport, setViewport] = useState({
    latitude: LAT,
    longitude: LNG,
    zoom: ZOOM,
  });
  const beforeMapRef = useRef<MapRef>(null);
  const currentMapRef = useRef<MapRef>(null);

  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

  useEffect(() => {
    if (isCompare && beforeMapRef.current && currentMapRef.current) {
      const beforeMap = beforeMapRef.current.getMap();
      const afterMap = currentMapRef.current.getMap();
      const map = new Compare(beforeMap, afterMap, '#comparison-container');

      return () => map.remove();
    }
    return () => {};
  }, [isCompare]);

  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <Style.Container id="comparison-container">
      <ReactMapGL
        ref={beforeMapRef}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        width="100%"
        height="100%"
        style={style}
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
      />
      <ReactMapGL
        ref={currentMapRef}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        width="100%"
        height="100%"
        style={style}
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
      />
      {children}
    </Style.Container>
  );
}

export default Map;
