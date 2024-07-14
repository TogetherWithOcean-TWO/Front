import { captureRef } from 'react-native-view-shot';
import { createAssetAsync } from 'expo-media-library';

export const captureView = async (viewRef) => {
  try {
    const uri = await captureRef(viewRef, {
      format: 'jpg',
      quality: 0.8,
    });

    // Save to camera roll
    await createAssetAsync(uri);
    return uri;
  } catch (error) {
    console.error('Failed to capture screenshot', error);
    throw error;
  }
};
