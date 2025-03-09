import { NavigatorScreenParams } from '@react-navigation/native';
import { ComponentProps } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { NotificationsScreen } from '../screens/main/NotificationsScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';
import { SettingsScreen } from '../screens/main/SettingsScreen';
import { CameraScreen } from '../screens/main/CameraScreen';
import { MapScreen } from '../screens/main/MapScreen';

// Get the correct icon name type from MaterialIcons
type IconName = ComponentProps<typeof MaterialIcons>['name'];

// Navigator Types
export enum NavigatorType {
  STACK = 'stack',
  BOTTOM_TABS = 'bottomTabs',
}

// Screen Configuration Type
export interface ScreenConfig {
  name: string;
  component?: React.ComponentType<any>;
  options?: {
    title?: string;
    headerShown?: boolean;
    icon?: IconName;
    [key: string]: any;
  };
  initialParams?: object;
  navigator?: NavigatorConfig;
}

// Navigator Configuration Type
export interface NavigatorConfig {
  type: NavigatorType;
  screens: ScreenConfig[];
  options?: object;
}

// App Template Navigation Configuration
export const navigationConfig: NavigatorConfig = {
  type: NavigatorType.STACK,
  screens: [
    {
      name: 'Auth',
      navigator: {
        type: NavigatorType.STACK,
        screens: [
          {
            name: 'Welcome',
            component: WelcomeScreen,
            options: {
              headerShown: false,
            },
          },
          {
            name: 'Login',
            component: LoginScreen,
            options: {
              title: 'Login',
            },
          },
          {
            name: 'Register',
            component: RegisterScreen,
            options: {
              title: 'Register',
            },
          },
        ],
      },
    },
    {
      name: 'Main',
      navigator: {
        type: NavigatorType.BOTTOM_TABS,
        screens: [
          {
            name: 'Camera',
            component: CameraScreen,
            options: {
              title: 'Camera',
              icon: 'camera-alt',
            },
          },
          {
            name: 'Map',
            component: MapScreen,
            options: {
              title: 'Map',
              icon: 'map',
            },
          },
          {
            name: 'Profile',
            component: ProfileScreen,
            options: {
              title: 'Profile',
              icon: 'person',
            },
          },
          {
            name: 'Settings',
            component: SettingsScreen,
            options: {
              title: 'Settings',
              icon: 'settings',
            },
          },
        ],
      },
    },
  ],
};

// Type definitions for navigation
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<TabParamList>;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type TabParamList = {
  Camera: undefined;
  Map: undefined;
  Profile: undefined;
  Settings: undefined;
}; 