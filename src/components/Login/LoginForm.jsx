import { useState } from "react";
import { View } from "react-native";
import { CustomInput } from "../common/CustomInput";

import EStyleSheet from "../../styles/global";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.form}>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  form: {
    width: "80%",
  },
  formGroup: {
    marginVertical: 5,
  },
});
