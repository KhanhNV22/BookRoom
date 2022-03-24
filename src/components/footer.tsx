import React from "react";
import "./components.css";
import "./styles-media.css";

const Footer = () => {
  return (
    <div>
      <div className="mt--30"></div>
      <div className="footer">
        <p>
          © 2022 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam -
          MSDN: 0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có
          sự cho phép bằng văn bản của chúng tôi.
        </p>
        <p>
          Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa
          Nam, quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại:
          18006586.
        </p>
        <p>
          Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp:
          06/06/2018, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội
        </p>
      </div>
    </div>
  );
};

export default Footer;
