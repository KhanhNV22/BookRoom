import React, { useState,useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "422653143846-21pcn0fknnquh0hs9881tbkhnn4f855d.apps.googleusercontent.com";

interface Props {
  children: any
}

const LoginSocial: React.FC<Props> = ({ children } : Props) => {
  const navigate = useNavigate();
  const [showloginButton, setShowloginButton] = useState<boolean>(true);
  const [showlogoutButton, setShowlogoutButton] = useState<boolean>(false);
  const [values, setValues] = useState<any>([]);

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(values));
}, [values]);

  const onLoginSuccess = (res: any) => {
    console.log("Login Success:", res.profileObj);
    setValues(res);
    setShowloginButton(false);
    setShowlogoutButton(true);
    navigate("/");
  };

  const onLoginFailure = (res: any) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    navigate("/login");
  };
  
  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText={children}
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          icon={false}
          className="login_gg"
        />
      ) : null}
      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Đăng xuất"
          onLogoutSuccess={onSignoutSuccess}
          icon={false}
          className="logout_gg"
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginSocial;
