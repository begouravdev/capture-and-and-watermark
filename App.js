import React, {useRef, useState} from 'react';
import {View, Button, StyleSheet, Alert, Text} from 'react-native';
import ViewShot, {captureRef} from 'react-native-view-shot';
import RNPhotoManipulator from 'react-native-photo-manipulator';

const App = () => {
  const viewRef = useRef(null);
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

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
        // const watermarkedImage = await PhotoManipulator.overlayImage(
        //   uri,
        //   watermarkUri,
        //   // TODO: Needs to make this dynamic
        //   {x: 600, y: 750},
        //   1, // Opacity of the watermark
        // );
        const overlay =
          'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png';
        const position = {
          x: size.width + 200,
          y: size?.height + 350,
        };

        RNPhotoManipulator.overlayImage(uri, overlay, position).then(path => {
          console.log(`Result image path: ${path}`);
        });

        // console.log('Watermarked image URI:', watermarkedImage);
        Alert.alert(
          'Snapshot taken and watermarked',
          // `Image saved to ${watermarkedImage}`,
        );
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ViewShot
        ref={viewRef}
        onLayout={x => setSize({...x.nativeEvent.layout})}
        style={styles.captureArea}>
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
