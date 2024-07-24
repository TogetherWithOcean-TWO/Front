import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState, useEffect } from 'react';
import { Button, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { SmallButton } from '../../components/common/CustomButton';
import { BackBar } from '../../components/common/CustomBar';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function CameraScreen() {
  const navigation = useNavigation(); //네이게이션 객체 가져오기
  const [facing, setFacing] = useState('back'); //카메라 방향 후면
  const [permission, requestPermission] = useCameraPermissions(); //카메라 권한 상태와 권한 요청 함수
  const [photoUri, setPhotoUri] = useState(null);  //찍은 사진의 uri
  const cameraRef = useRef(null);     //카메라 참조
  const [showButtons, setShowButtons] = useState(false);  //버튼 표시 여부 (사진 찍은 후에 true)

  const iconColor = EStyleSheet.value('$White01');

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        console.log('Camera permission not granted');
      }
    })();
  }, []);

  // 카메라 권한 로드 중
  if (!permission) {
    return <View />;
  }

  // 카메라 권한이 부여되지 않은 경우
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>카메라 사용권한이 필요합니다</Text>
        <Button onPress={requestPermission} title="권한부여" />
      </View>
    );
  }

  //사진 찍기 함수
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setShowButtons(true);
    }
  };

  //사진 다시 찍기 함수
  const retakePicture = () => {
    setPhotoUri(null);
    setShowButtons(false);
  };

  //사진 제출 함수
  const submitPhoto = () => {
    navigation.navigate('PhotoSubmit', { uri: photoUri });  //사진 가지고 '사진 제출' 화면으로 이동
  };

  return (

    <View style={{ flex: 1 }}>
      <BackBar navigation={navigation} />
      <View style={styles.container}>
        {/*조건부 렌더링 : 사진 찍었을 때 true, 뒤로 가기 버튼 눌렀을 때 다시 false */}
        {showButtons && (
          <View style={styles.mainTitleWithIcon}>
            <SmallButton text="다시찍기" onPress={retakePicture} right={70} />
            <SmallButton text="사진사용" onPress={submitPhoto} right={0} />
          </View>
        )}
        {/*조건부 렌더링 : img uri가 존재하면 <image> 컴포넌트 랜더링, 그렇지 않으면 <CameraView> 컴포넌트 랜더링*/}
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
        ) : (
          <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
            {/*<View style={styles.dimOverlay} />*/}
            {/*오버레이 */}
            <View style={styles.overlay}>
              <View style={styles.targetArea} />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Icon
                  name="radio-button-on-outline"
                  size={64}
                  color={iconColor}
                />
              </TouchableOpacity>
            </View>
          </CameraView>
        )
        }
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "$White01"
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30, // 바닥에서의 거리를 조절
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    //borderWidth: 2,
    //borderColor: 'white',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  mainTitleWithIcon: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: -10,
    marginRight: 10
  },
  previewImage: {
    flex: 1,
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', // 반투명한 검은색 배경
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '40%', // 상단에 패딩 추가
    
  },
  targetArea: {
    width: '60%',
    height: '60%',
    borderWidth: 3,
    borderColor: '$White01',
    backgroundColor: 'transparent',
  },
});