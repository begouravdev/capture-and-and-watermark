import React, {useRef} from 'react';
import {View, Button, StyleSheet, Alert, Text} from 'react-native';
import ViewShot, {captureRef} from 'react-native-view-shot';
import PhotoManipulator from 'react-native-photo-manipulator';

const App = () => {
  const viewRef = useRef(null);

  const captureAndAddWatermark = async () => {
    if (viewRef.current) {
      try {
        // Capture the snapshot
        let uri = await captureRef(viewRef.current, {
          format: 'png',
          quality: 1,
        });

        // Ensure the URI has the correct scheme
        if (!uri.startsWith('file://')) {
          uri = `file://${uri}`;
        }

        console.log('Captured image URI:', uri);

        // Overlay the watermark
        const watermarkUri =
          'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png';
        const watermarkedImage = await PhotoManipulator.overlayImage(
          uri,
          watermarkUri,
          // TODO: Needs to make this dynamic
          {x: 600, y: 750},
          1, // Opacity of the watermark
        );

        console.log('Watermarked image URI:', watermarkedImage);
        Alert.alert(
          'Snapshot taken and watermarked',
          `Image saved to ${watermarkedImage}`,
        );
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ViewShot ref={viewRef} style={styles.captureArea}>
        <Text style={{fontSize: 22}}>Alex I did this Please have a look</Text>
      </ViewShot>
      <Button
        title="Capture and Add Watermark"
        onPress={captureAndAddWatermark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureArea: {
    width: '90%',
    height: 400,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});

export default App;
