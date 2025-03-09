import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { navigationRef } from './src/navigation/utils';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
