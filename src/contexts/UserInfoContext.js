import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

// UserInfoProvider 컴포넌트
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    realName: "",
    nickname: "",
    email: "",
    passwd: "",
    checkPasswd: "",
    phoneNumber: "",
    postalNumber: "",
    address: "",
    detailAddress: "",
    charId: "",
    charName: "",
    stepGoal: "",
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
