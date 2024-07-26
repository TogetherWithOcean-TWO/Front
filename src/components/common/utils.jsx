export const validateUserInfo = (userInfo, checkNickName, checkEmail) => {
  let valid = true;
  let errors = {
    nameError: "",
    nicknameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneNumberError: "",
  };

  // 이름 유효성 검사
  if (!userInfo.realName || !/^[가-힣a-zA-Z]{2,10}$/.test(userInfo.realName)) {
    errors.nameError = "숫자, 특수문자를 제외하고 2~10자로 입력해주세요";
    valid = false;
  } else {
    errors.nameError = " ";
  }

  // 닉네임 유효성 검사
  if (
    !userInfo.nickname ||
    !/^[\d가-힣a-zA-Z]{2,10}$/.test(userInfo.nickname)
  ) {
    errors.nicknameError = "특수문자를 제외하고 2~10자로 입력해주세요";
    valid = false;
  } else {
    errors.nicknameError = " ";
  }

  // 이메일 유효성 검사
  if (!userInfo.email || !/\S+@\S+\.\S+/.test(userInfo.email)) {
    errors.emailError = "이메일 형식에 맞게 입력해주세요";
    valid = false;
  } else {
    errors.emailError = " ";
  }

  // 비밀번호 유효성 검사
  if (
    !userInfo.passwd ||
    !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\w\s]).{10,15}$/.test(userInfo.passwd)
  ) {
    errors.passwordError = "영문, 숫자, 특수문자 조합 10~15자로 입력해주세요";
    valid = false;
  } else {
    errors.passwordError = " ";
  }

  // 비밀번호 확인 유효성 검사
  if (userInfo.checkPasswd !== userInfo.passwd) {
    errors.confirmPasswordError = "비밀번호가 일치하지 않습니다";
    valid = false;
  } else {
    errors.confirmPasswordError = " ";
  }

  // 전화번호 유효성 검사
  if (!userInfo.phoneNumber) {
    errors.phoneNumberError = "010-1234-5678 형식에 맞게 입력해주세요";
  }

  if (checkNickName === false || checkEmail === false) {
    valid = false;
  }

  return { valid, errors };
};

export const formatPhoneNumber = (
  text,
  setUserInfo,
  userInfo,
  setPhoneNumberError
) => {
  let formatted = text.replace(/\D/g, "");

  if (formatted.length > 3 && formatted.length < 8)
    formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  if (formatted.length >= 8)
    formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");

  if (formatted.length <= 13) {
    setUserInfo({ ...userInfo, phoneNumber: formatted });
  }

  if (!formatted || !/^010-\d{4}-\d{4}$/.test(formatted)) {
    setPhoneNumberError("010-1234-5678 형식에 맞게 입력해주세요");
  } else {
    setPhoneNumberError(" ");
  }
};

// 유효성 검사 함수
export const validateTrashBagRequest = (userInfo) => {
  let valid = true;
  let errors = {
    nameError: "",
    phoneNumberError: "",
  };

  // 이름 유효성 검사
  if (!userInfo.realName || !/^[가-힣a-zA-Z]{2,10}$/.test(userInfo.realName)) {
    errors.nameError = "숫자, 특수문자를 제외하고 2~10자로 입력해주세요";
    valid = false;
  } else {
    errors.nameError = " ";
  }

  // 전화번호 유효성 검사
  if (!userInfo.phoneNumber || !/^010-\d{4}-\d{4}$/.test(userInfo.phoneNumber)) {
    errors.phoneNumberError = "010-1234-5678 형식에 맞게 입력해주세요";
    valid = false;
  } else {
    errors.phoneNumberError = " ";
  }

  return { valid, errors };
};

// 봉투 신청에서 변경 사항을 전역 변수에 반영하지 않기 위해 set 없는 format
// 봉투 신청 시 번호 자동 포맷팅
export const formatPhoneNumberWithoutSet = (text) => {
  let formatted = text.replace(/\D/g, "");

  if (formatted.length > 3 && formatted.length < 8)
    formatted = formatted.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  if (formatted.length >= 8)
    formatted = formatted.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");

  return formatted;
};
