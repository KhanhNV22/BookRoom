import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import LoginComponent from "../components/LoginComponent";
import { BsLock } from "react-icons/bs";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiOutlinePhone,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import "./registration.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginSocial from "../components/LoginSocial";

const Registration = () => {
  const navigate = useNavigate();
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const formik_regis = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      name: "",
      middle_name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Cần nhập email theo đúng định dạng")
        .required("Email không được để trống!"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "Tối thiểu 10 ký tự")
        .max(11, "Tối đa 11 ký tự")
        .required("Số điện thoại không được để trống!"),
      name: Yup.string()
        .min(2, "Nhập tối thiểu 2 ký tự")
        .max(15, "Nhập tối đa 15 ký tự")
        .required("Tên không được để trống!"),
      middle_name: Yup.string()
        .min(2, "Nhập tối thiểu 2 ký tự")
        .max(15, "Nhập tối đa 15 ký tự")
        .required("Họ và Tên đệm không được để trống!"),
      password: Yup.string()
        .min(8, "Nhập tối thiểu 8 ký tự")
        .required("Mật khẩu không được để trống!"),
      confirm_password: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          "Mật khẩu xác nhận không trùng với mật khẩu đã tạo"
        )
        .required("Xác nhận mật khẩu không được để trống!"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      localStorage.setItem("foo", JSON.stringify({ foo: "bar" }));
      navigate("/");
    },
  });

  return (
    <div>
      <LoginComponent>
        <h3 className="account__title">Đăng ký thành viên</h3>

        <form className="account__body" onSubmit={formik_regis.handleSubmit}>
          <label className="input-group__label bold is-block">
            Địa chỉ email
          </label>
          <div className="input-group__icon is-relative">
            <input
              type="email"
              name="email"
              className="input"
              value={formik_regis.values.email}
              onChange={formik_regis.handleChange}
            />
            <span className="is-absolute input-icon">
              <AiOutlineMail />
            </span>
            {formik_regis.errors.email && formik_regis.touched.email && (
              <p className="formik_error">{formik_regis.errors.email}</p>
            )}
          </div>
          <label className="input-group__label bold is-block">
            Số điện thoại
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="phoneNumber"
              className="input"
              type="number"
              value={formik_regis.values.phoneNumber}
              onChange={formik_regis.handleChange}
            />
            <span className="is-absolute input-icon">
              <AiOutlinePhone />
            </span>
            {formik_regis.errors.phoneNumber &&
              formik_regis.touched.phoneNumber && (
                <p className="formik_error">
                  {formik_regis.errors.phoneNumber}
                </p>
              )}
          </div>
          <label className="input-group__label bold is-block">Tên</label>
          <div className="input-group__icon is-relative">
            <input
              name="name"
              className="input"
              type="text"
              value={formik_regis.values.name}
              onChange={formik_regis.handleChange}
            />
            {formik_regis.errors.name && formik_regis.touched.name && (
              <p className="formik_error">{formik_regis.errors.name}</p>
            )}
          </div>
          <label className="input-group__label bold is-block">
            Họ và Tên đệm
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="middle_name"
              className="input"
              type="text"
              value={formik_regis.values.middle_name}
              onChange={formik_regis.handleChange}
            />
            {formik_regis.errors.middle_name &&
              formik_regis.touched.middle_name && (
                <p className="formik_error">
                  {formik_regis.errors.middle_name}
                </p>
              )}
          </div>
          <label className="input-group__label bold is-block">
            Mật Khẩu (tối thiểu 8 ký tự)
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="password"
              type="password"
              className="input"
              value={formik_regis.values.password}
              onChange={formik_regis.handleChange}
            />{" "}
            <span className="is-absolute input-icon">
              <BsLock />
            </span>{" "}
            {formik_regis.errors.password && formik_regis.touched.password && (
              <p className="formik_error">{formik_regis.errors.password}</p>
            )}
          </div>{" "}
          <label className="input-group__label bold is-block">
            Xác nhận mật khẩu mới
          </label>
          <div className="input-group__icon is-relative">
            <input
              name="confirm_password"
              type="password"
              className="input"
              value={formik_regis.values.confirm_password}
              onChange={formik_regis.handleChange}
            />{" "}
            <span className="is-absolute input-icon">
              <BsLock />
            </span>{" "}
            {formik_regis.errors.confirm_password &&
              formik_regis.touched.confirm_password && (
                <p className="formik_error">
                  {formik_regis.errors.confirm_password}
                </p>
              )}
          </div>{" "}
          <button
            type="submit"
            className="account__btn btn btn-grad--primary btn--shadow btn--md btn--radius btn--full bold"
          >
            Đăng Ký
          </button>{" "}
          <div className="center-xs">
            <div className="mt--30">
              Bạn đã có tài khoản Luxstay?{" "}
              <Link to="/" className="text_decoration">
                <span
                  className="text-orange bold"
                  style={{ cursor: "pointer" }}
                >
                  Đăng Nhập
                </span>
              </Link>
            </div>
          </div>
        </form>

        <div className="account__body">
          <div className="center-xs">
            <span>
              Tôi đồng ý với <b>Bảo mật</b> và <b>Điều khoản hoạt động</b> của Luxstay.
            </span>
          </div>{" "}
          <div className="account__3rd">
            <div>
              <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                <span>Đăng nhập với Facebook</span>{" "}
                <AiFillFacebook className="is-absolute icon-square" />
              </div>
            </div>{" "}
            <div className="mt-2">
              <LoginSocial>
                <div className="btn btn-outline--secondary btn--md btn--radius btn--full is-relative">
                  <span>Đăng nhập với Google</span>{" "}
                  <AiFillGooglePlusCircle className="is-absolute icon-square" />
                </div>
              </LoginSocial>
            </div>
          </div>
        </div>
      </LoginComponent>
      <Footer />
    </div>
  );
};

export default Registration;
