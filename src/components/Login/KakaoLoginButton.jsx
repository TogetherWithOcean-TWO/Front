import { TouchableOpacity, Text } from "react-native";
import EStyleSheet from "../../styles/global";
import { WithLocalSvg } from "react-native-svg/css";
import kakao from "../../assets/images/kakao.svg"

/*export const KakaoLoginButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>카카오로그인</Text>
    </TouchableOpacity>
  );
};*/

export const KakaoLoginButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <WithLocalSvg asset={kakao} width="100%"></WithLocalSvg>
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
