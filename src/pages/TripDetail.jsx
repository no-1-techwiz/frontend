import {useParams} from "react-router-dom";
import {useState, useCallback} from "react";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '400px', height: '400px'
};

const center = {
    lat: -3.745, lng: -38.523
};
export const TripDetail = () => {
    let {id} = useParams();
    const [trip, setTrip] = useState(JSON.parse(localStorage.getItem(`trip:${id}`)))

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return <div className="flex justify-center">
        <div className="w-[60%] min-h-screen" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            {JSON.stringify(trip)}</div>
        <div className="w-[40%]">
            <div>
                <iframe  className="w-full h-screen" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </div>
        </div>
    </div>
}