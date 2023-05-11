import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import * as process from "process";
import mapJson from "./dark.json";

const BaseMap = () => {
    const containerStyle = {
        width: "100%",
        height: "550px"
    };

    const center = {
        lat: 47.0483931,
        lng: -122.9494588,
    };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.GOOGLE_MAP_KEY || ""
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(m: any) {
        // const bounds = new window.google.maps.LatLngBounds(center);
        // m.fitBounds(bounds);
        setMap(m)
    }, [])

    const onUnmount = React.useCallback(function callback(m: any) {
        console.log(m)
        setMap(null)
    }, [])

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    zoom: 6,
                    styles: mapJson
                }}
                onUnmount={onUnmount}
            >
                <Marker
                    icon="/images/marker2.png"
                    position={center}/>
            </GoogleMap>
        </div>
    ) : (<div style={{ height: 550 }}></div>);
};

export default BaseMap