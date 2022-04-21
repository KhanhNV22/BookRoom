import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

function MyMapComponent(props: { lat: any, lng: any }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDrC_T_cIFjrGD8utZPK2Yh-ydpoJdmyxA",
  });

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props}
          zoom={16}
        >
          <Marker position={props} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}

export default MyMapComponent;