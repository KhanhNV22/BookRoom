import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import AddressRoom from "./pages/addressRoom";
import SuggestAddress from './pages/suggestAddress';
import "./App.css";
import Rooms from "./pages/rooms";
import Host from "./pages/host";
import RoomDetail from "./pages/host/roomsDetail";
import Admin from "./pages/admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="addressRoom/:id" element={<AddressRoom />} />
        <Route path="suggestAddress" element={<SuggestAddress />} />
        <Route path="rooms/:id" element={<Rooms />} />
        <Route path="host" element={<Host />} />
        <Route path="roomdetail/:id" element={<RoomDetail />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
