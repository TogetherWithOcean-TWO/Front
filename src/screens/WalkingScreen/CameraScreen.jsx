import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState, useEffect } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; // Ionicons 아이콘 추가
import { SmallButton } from '../../components/common/CustomButton';
import { BackBar } from '../../components/common/CustomBar';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function CameraScreen() {
const navigation = useNavigation();
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>카메라 사용권한이 필요합니다</Text>
        <Button onPress={requestPermission} title="권한부여" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setShowButtons(true);
    }
  };

  const retakePicture = () => {
    setPhotoUri(null);
    setShowButtons(false);
  };

  const submitPhoto = () => {
    navigation.navigate('PhotoSubmit', { uri: photoUri });
  };

  return (

    <View style={{flex : 1}}>
        <BackBar navigation={navigation} />
        <View style={styles.container}>
            {showButtons && (
            <View style={styles.mainTitleWithIcon}>
                <SmallButton text="다시찍기" onPress={retakePicture} right={70}/>
                <SmallButton text="사진사용" onPress={submitPhoto} right={0}/>
            </View>
            )}
            {photoUri ? (
                <Image source={{uri : photoUri}} style={styles.previewImage}/>
            ) : (
                <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Icon 
                            name="radio-button-on-outline"
                            size={64}
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
    backgroundColor : "$White01"
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  mainTitleWithIcon : {
        alignItems : "flex-end",
        justifyContent: "center",
        flexDirection : "row",
        marginBottom : 10,
        marginTop : -10,
        marginRight : 10
    },
    previewImage: {
        flex: 1,
      },
});