import { TouchableOpacity, Text } from "react-native";
import EStyleSheet from "../../styles/global";

export const KakaoLoginButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>카카오로그인</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    backgroundColor: "#FEE500",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    height: 50,
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
    fontFamily: "Pretendard",
  },
});
