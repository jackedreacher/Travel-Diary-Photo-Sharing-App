import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import type { CameraCapturedPicture } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { usePhotoContext } from '../../context/PhotoContext';

export const CameraScreen: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const { addPhoto } = usePhotoContext();
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (locationStatus !== 'granted' || mediaStatus !== 'granted') {
        console.error('Location or media permissions not granted');
      }
    })();
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current) return;
    
    try {
      const photo = await cameraRef.current.takePictureAsync();
      if (!photo) return;

      const location = await Location.getCurrentPositionAsync({});
      
      addPhoto({
        uri: photo.uri,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        timestamp: Date.now(),
        title: `Photo taken at ${new Date().toLocaleString()}`,
      });
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const location = await Location.getCurrentPositionAsync({});
        
        addPhoto({
          uri: result.assets[0].uri,
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          timestamp: Date.now(),
          title: `Photo from gallery at ${new Date().toLocaleString()}`,
        });
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  if (!permission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 16 }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#3B82F6',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
          }}
          onPress={requestPermission}
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={isFrontCamera ? 'front' : 'back'}
        onMountError={(error) => console.error('Camera mount error:', error)}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 'auto',
            marginBottom: 20,
            marginHorizontal: 20,
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 9999,
                padding: 16,
              }}
              onPress={() => setIsFrontCamera(!isFrontCamera)}
            >
              <MaterialIcons name="flip-camera-ios" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 9999,
                padding: 16,
              }}
              onPress={takePicture}
            >
              <MaterialIcons name="camera" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 9999,
                padding: 16,
              }}
              onPress={pickImage}
            >
              <MaterialIcons name="photo-library" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}; 