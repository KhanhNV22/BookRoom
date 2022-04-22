import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px'
};

function HostMap(props: any) {
  const [center, setCenter] = useState<any>({
    lat: props.lat ? props.lat : 20.998164084043644,
    lng: props.lng ? props.lng : 105.84659814834595,
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
      <p style={{ color: 'green', fontSize: "12px", marginBottom: '5px' }}>Bạn Hãy Kéo Bản Đồ Và Click Để Chọn Địa Điểm</p>
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