import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '500px'
};

function HostMap(props: any) {
    const [center, setCenter] = useState<any>({
        lat: 20.989008855293775,
        lng: 105.79464912414551,
    });

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDrC_T_cIFjrGD8utZPK2Yh-ydpoJdmyxA",
    });

    const onCLickMap = (event: any) => {
        const data = event.latLng.toJSON();
        setCenter(data);
        props.handeClickCenter(data)
    };

    return (
        <div>
            <p style={{ color: 'red', fontSize: "12px", marginBottom: '5px' }}>Bạn Hãy Kéo Bản Đồ Để Chọn Địa Điểm</p>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                    onClick={onCLickMap}
                >
                    <Marker position={center} />
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    )
}

export default HostMap;