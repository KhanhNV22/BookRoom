import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Registration from "./registration";
import Home from "./home";
import AddressRoom from "./addressRoom";
import SuggestAddress from './suggestAddress';
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Home />} />
        <Route path="addressRoom" element={<AddressRoom />} />
        <Route path="suggestAddress" element={<SuggestAddress />} />
      </Routes>
    </div>
  );
}

export default App;
