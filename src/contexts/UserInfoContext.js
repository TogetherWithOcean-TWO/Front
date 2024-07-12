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
    stepGoal: 10000,
    todaySteps: 1000, // 오늘 걸음 수 초기화

    // 포인트
    point: 10000,

    //가지고 있는 item
    userItem: [
      {
        idx: 0,
        category: "fruit",
        name: "mango",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 1,
        category: "instrument",
        name: "tambourine",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 0,
        category: "sea",
        name: "crab",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 1,
        category: "sea",
        name: "threeFishs",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "sea",
        name: "seaweed",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "sea",
        name: "shirimp",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 0,
        category: "background",
        name: "beachBall",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 1,
        category: "instrument",
        name: "tambourine",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "sea",
        name: "shirimp",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 0,
        category: "background",
        name: "beachBall",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 1,
        category: "instrument",
        name: "tambourine",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 2,
        category: "sea",
        name: "seaweed",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "sea",
        name: "shirimp",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 0,
        category: "background",
        name: "beachBall",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 1,
        category: "instrument",
        name: "tambourine",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },

      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 3,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 2,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
    ],
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
