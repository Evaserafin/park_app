import React, {useEffect, useRef, useState} from "react";
import './map.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhMTk4MHNlcmFmaW4iLCJhIjoiY2xiOGJxMnl4MGh0ajNvcnNiZTNya2lnZyJ9._TGQwlo7pAN68ZNZ5QRIBg';




function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(22.6580);
    const [lat, setLat] = useState(53.4227);
    const [zoom, setZoom] = useState(16.68);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map;
