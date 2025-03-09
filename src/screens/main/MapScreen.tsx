import React, { useEffect, useState, useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_DEFAULT } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { usePhotoContext } from '../../context/PhotoContext';

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export const MapScreen: React.FC = () => {
  const { photos } = usePhotoContext();
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState<Region | null>(null);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const newRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setRegion(newRegion);
      mapRef.current?.animateToRegion(newRegion, 1000);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  if (!region) {
    return null; // Or a loading indicator
  }

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 relative">
        <MapView
          ref={mapRef}
          style={{ flex: 1, width: '100%' }}
          provider={PROVIDER_DEFAULT}
          initialRegion={region}
          showsUserLocation={true}
        >
          {photos.map((photo) => (
            <Marker
              key={photo.id}
              coordinate={photo.location}
              title={photo.title}
            >
              <Callout>
                <View style={{ width: 200, height: 200, padding: 4 }}>
                  <Image 
                    source={{ uri: photo.uri }} 
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <TouchableOpacity 
          className="absolute right-4 bottom-4 bg-white rounded-full p-3 shadow-lg"
          onPress={getCurrentLocation}
        >
          <MaterialIcons name="my-location" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}; 