import mapboxgl, { Map } from 'mapbox-gl';

export interface MarkerType {
  lng: number;
  lat: number;
  size: string;
}

interface AddMarkersToMapParameterType {
  markers: MarkerType[];
  map: Map;
}

export const addMarkersToMap = ({ markers, map }: AddMarkersToMapParameterType) => {
  markers.forEach((marker) => {
    new mapboxgl.Marker().setLngLat([marker.lng, marker.lat]).addTo(map);
  });
};

export const removeMarkersToMap = (markers: mapboxgl.Marker[]) => {
  markers.forEach((marker) => marker.remove());
};
