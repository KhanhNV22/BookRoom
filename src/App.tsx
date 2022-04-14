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
import CheckoutBooking from "./pages/rooms/checkUserBooking";
import CheckoutBookingDetail from "./pages/admin/checkBookingDetail";
import UpdateUser from "./pages/admin/updateUser";
import SettingUser from "./pages/header/settingUser";
import ListBookingsUser from "./pages/listBookingUser";
import LoginAdmin from "./pages/admin/loginAdmin";

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
        <Route path="roomdetail/:id" element={<RoomDetail />} />
        <Route path="host/CheckoutBookingDetail/:id" element={<CheckoutBookingDetail/> } />
        {/* admin */}
        <Route path="admin" element={<Admin />} />
        <Route path="admin/CheckoutBookingDetail/:id" element={<CheckoutBookingDetail/> }/>
        <Route path="admin/updateUser/:id" element={<UpdateUser/> }/>
        <Route path="loginAdmin" element={<LoginAdmin/> }/>
      </Routes>
    </div>
  );
}

export default App;
