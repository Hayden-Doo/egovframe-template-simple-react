import React, { useState } from "react";
import axios from "axios";

function EgovSignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // [메모] e는 사용자가 입력한 아이디값=name , 패스워드값=value로 저장되어 있다.

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // [메모] await는 async함수내에서만 사용가능하다 async 필수.
    e.preventDefault(); //  [메모] 제출 이벤트의 기본 동작을 중지

    try {
      const response = await axios.post("/uat/uia/actionSignUpAPI.do", {
        username: formData.username,
        password: formData.password,
      });
      console.log("서버로 받은 응답처리 .. : ", response.data); // [메모]  서버로부터 받은 응답 처리
    } catch (error) {
      console.error("Error occurred:", error);
    }

    console.log("formData ....: ", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading"></h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            아이디 :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            비밀번호:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default EgovSignUp;
