import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import AddressRoom from "./pages/addressRoom";
import SuggestAddress from './pages/suggestAddress';
import "./App.css";
import Rooms from "./pages/rooms";
import Host from "./pages/host";
import HostRoomDetail from "./pages/host/hostRoomsDetail";
import Admin from "./pages/admin";
import CheckoutBooking from "./pages/rooms/checkUserBooking";
import CheckoutBookingDetail from "./pages/admin/checkBookingDetail";
import UpdateUser from "./pages/admin/updateUser";
import SettingUser from "./pages/header/settingUser";
import ListBookingsUser from "./pages/listBookingUser";
import LoginAdmin from "./pages/admin/loginAdmin";
import LoginHost from "./pages/host/hostLogin";
import HostCheckBookingDetail from "./pages/host/hostCheckBookingDetail";
import HostAddRooms from "./pages/host/hostAddRooms";
import CheckRoomDetail from "./pages/admin/checkRoomDetail";
import HostRegistration from "./pages/host/hostRegistration";

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
        <Route path="checkoutUserBooking/:id" element={<CheckoutBooking />} />
        <Route path="settingUser" element={<SettingUser />} />
        <Route path="listBookingsUser" element={<ListBookingsUser />} />
        <Route path="listBookingsUser/CheckoutBookingDetail/:id" element={<CheckoutBookingDetail/> } />
        {/* host */}
        <Route path="host" element={<Host />} />
        <Route path="hostRoomdetail/:id" element={<HostRoomDetail />} />
        <Route path="host/hostCheckBookingDetail/:id" element={<HostCheckBookingDetail/> } />
        <Route path="loginHost" element={<LoginHost/> } />
        <Route path="host/hostAddRooms" element={<HostAddRooms/> } />
        <Route path="hostRegistration" element={<HostRegistration/> } />
        {/* admin */}
        <Route path="admin" element={<Admin />} />
        <Route path="admin/CheckoutBookingDetail/:id" element={<CheckoutBookingDetail/> }/>
        <Route path="admin/updateUser/:id" element={<UpdateUser/> }/>
        <Route path="loginAdmin" element={<LoginAdmin/> }/>
        <Route path="admin/checkRoomDetail/:id" element={<CheckRoomDetail/> }/>
      </Routes>
    </div>
  );
}

export default App;
