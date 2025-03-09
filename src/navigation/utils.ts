import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList, TabParamList } from './config';

// Create a navigation ref that can be used outside of React components
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Type-safe navigation functions
export const navigate = {
  toTab: (screen: keyof TabParamList) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate('Main', { screen });
    }
  },
  toAuth: () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate('Auth', { screen: 'Welcome' });
    }
  },
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

// Helper to check if navigation is possible
export const canNavigate = () => navigationRef.isReady();

// Get current route name
export const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  }
  return undefined;
}; 