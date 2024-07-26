import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

// UserInfoProvider
// 사용자 컴포넌트
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
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
    todaySteps: 0, // 오늘 걸음 수 초기화

    monthlyPlog: 0, //달에 줍깅 몇번

    // 포인트
    point: 10000,

    //토큰
    accessToken: "",
    refreshToken: "",
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
