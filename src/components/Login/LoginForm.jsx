import { useState } from "react";
import { View } from "react-native";
import { CustomInput } from "../common/CustomInput";

import EStyleSheet from "../../styles/global";

export const LoginForm = (params) => {
  return (
    <View style={styles.form}>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="email"
          value={params.email}
          onChangeText={(text) => params.setEmail(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <CustomInput
          placeholder="password"
          value={params.passwd}
          secure={true}
          onChangeText={(text) => params.setPasswd(text)}
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
