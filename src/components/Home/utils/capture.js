import { requestPermissionsAsync, createAssetAsync } from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

export const handleCapture = async (viewRef, setCapturedUri) => {
  try {
    const { status } = await requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const uri = await captureRef(viewRef, {
      format: 'jpg',
      quality: 0.8,
    });
    await createAssetAsync(uri);
    setCapturedUri(null);  // 캡처 후 URI 상태 초기화
  } catch (error) {
    console.error('Capture failed', error);
  }
};
