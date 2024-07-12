import React, { createContext, useContext, useState } from "react";

const UserItemInfoContext = createContext();

// UserInfoProvider
export const UserItemInfoProvider = ({ children }) => {
  const [userItemInfo, setUserItemInfo] = useState({
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
        use: true,
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
        idx: 4,
        category: "sea",
        name: "crab",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 5,
        category: "sea",
        name: "threeFishs",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 6,
        category: "sea",
        name: "seaweed",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 7,
        category: "sea",
        name: "shirimp",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 8,
        category: "background",
        name: "beachBall",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 9,
        category: "instrument",
        name: "tambourine",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 10,
        category: "etc",
        name: "camera",
        use: false,
        x: 0,
        y: 0,
        // x, y 좌표는 use가 true 인 경우에
      },
      {
        idx: 11,
        category: "fruit",
        name: "peach",
        use: false,
        x: 0,
        y: 0,
      },
      {
        idx: 12,
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
    <UserItemInfoContext.Provider value={{ userItemInfo, setUserItemInfo }}>
      {children}
    </UserItemInfoContext.Provider>
  );
};

export const useUserItem = () => useContext(UserItemInfoContext);
