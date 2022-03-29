import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Registration from "./registration";
import Home from "./home";
import AddressRoom from "./addressRoom";
import SuggestAddress from './suggestAddress';
import "./App.css";
import Rooms from "./rooms";
import Host from "./host";
import RoomDetail from "./host/roomsDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="addressRoom" element={<AddressRoom />} />
        <Route path="suggestAddress" element={<SuggestAddress />} />
        <Route path="rooms/:id" element={<Rooms />} />
        <Route path="host" element={<Host />} />
        <Route path="roomdetail" element={<RoomDetail />} />
      </Routes>
    </div>
  );
}

export default App;
