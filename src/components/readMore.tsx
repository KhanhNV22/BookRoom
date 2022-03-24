import React, { useState } from "react";
import "./components.css";
  
interface PropsRead {
    children: any
}

const ReadMore: React.FC<PropsRead> = ({ children } : PropsRead) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 10) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Đọc Thêm" : "Thu gọn"}
      </span>
    </div>
  );
};

export default ReadMore;