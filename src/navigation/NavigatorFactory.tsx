import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigatorType, NavigatorConfig, ScreenConfig } from './config';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { ComponentProps } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

type IconName = ComponentProps<typeof MaterialIcons>['name'];

type RouteParams = {
  icon?: string;
  [key: string]: any;
};

// Create navigator instances with generic type
const Stack = createNativeStackNavigator<ParamListBase>();
const BottomTabs = createBottomTabNavigator<ParamListBase>();

// Get the appropriate navigator component based on type
const getNavigator = (type: NavigatorType) => {
  switch (type) {
    case NavigatorType.STACK:
      return Stack;
    case NavigatorType.BOTTOM_TABS:
      return BottomTabs;
    default:
      return Stack;
  }
};

// Wrap component with SafeAreaView
const withSafeArea = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left', 'bottom']}>
      <View style={{ flex: 1 }}>
        <Component {...props} />
      </View>
    </SafeAreaView>
  );
};

// Create screens recursively
const createScreens = (screens: ScreenConfig[], navigatorType: NavigatorType) => {
  const CurrentNavigator = getNavigator(navigatorType);
  
  return screens.map((screen) => {
    const Navigator = screen.navigator
      ? getNavigator(screen.navigator.type)
      : null;

    let screenComponent;
    if (Navigator) {
      screenComponent = () => (
        <Navigator.Navigator 
          {...screen.navigator?.options}
          screenOptions={{
            headerShown: false,
            tabBarIcon: ({ color, size }: { color: string; size: number }) => {
              const iconName = (screen.options?.icon || 'circle') as IconName;
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          }}
        >
          {createScreens(screen.navigator!.screens, screen.navigator!.type)}
        </Navigator.Navigator>
      );
    } else if (screen.component) {
      screenComponent = withSafeArea(screen.component);
    }

    if (!screenComponent) {
      throw new Error(`No component defined for screen: ${screen.name}`);
    }

    return (
      <CurrentNavigator.Screen
        key={screen.name}
        name={screen.name}
        component={screenComponent}
        options={{ ...screen.options, headerShown: false }}
        initialParams={screen.initialParams}
      />
    );
  });
};

interface NavigatorFactoryProps {
  config: NavigatorConfig;
}

export const NavigatorFactory: React.FC<NavigatorFactoryProps> = ({ config }) => {
  const Navigator = getNavigator(config.type);

  return (
    <Navigator.Navigator {...config.options}>
      {createScreens(config.screens, config.type)}
    </Navigator.Navigator>
  );
}; 