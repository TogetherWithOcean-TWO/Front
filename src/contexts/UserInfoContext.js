import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

// UserInfoProvider
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    //회원가입 컴포넌트
    realName: "",
    nickname: "",
    email: "",
    passwd: "",
    checkPasswd: "",
    phoneNumber: "",
    postalCode: "",
    address: "",
    detailAddress: "",
    charId: 0,
    charName: "",
    stepGoal: 0,

    // 포인트
    point: 10000,
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
