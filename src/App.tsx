import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import AddressRoom from "./pages/addressRoom";
import SuggestAddress from './pages/suggestAddress';
import "./App.css";
import Rooms from "./pages/rooms";
import Host from "./pages/host";
import RoomDetail from "./pages/host/hostRoomsDetail";
import Admin from "./pages/admin";
import CheckoutRooms from "./pages/rooms/checkRooms";
import CheckoutBookingDetail from "./pages/admin/checkBookingDetail";
import UpdateUser from "./pages/admin/updateUser";
import SettingUser from "./pages/header/settingUser";
import ListBookingsUser from "./pages/listBookingUser";

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
        <Route path="checkoutRooms/:id" element={<CheckoutRooms />} />
        <Route path="settingUser" element={<SettingUser />} />
        <Route path="listBookingsUser" element={<ListBookingsUser />} />
        {/* host */}
        <Route path="host" element={<Host />} />
        <Route path="roomdetail/:id" element={<RoomDetail />} />
        {/* admin */}
        <Route path="admin" element={<Admin />} />
        <Route path="admin/CheckoutBookingDetail/:id" element={<CheckoutBookingDetail/> }/>
        <Route path="admin/updateUser/:id" element={<UpdateUser/> }/>
      </Routes>
    </div>
  );
}

export default App;
