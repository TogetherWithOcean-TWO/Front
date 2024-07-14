import { captureRef } from 'react-native-view-shot';

export const captureView = async (ref) => {
  try {
    const uri = await captureRef(ref, {
      format: 'jpg',
      quality: 0.8,
    });
    console.log('Captured URI: ', uri);
    return uri;
  } catch (error) {
    console.error('Error capturing view: ', error);
    throw error;
  }
};
