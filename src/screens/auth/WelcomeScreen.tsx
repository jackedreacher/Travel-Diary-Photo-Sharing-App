import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/config';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-4xl font-bold mb-8">Welcome</Text>
      <Pressable
        className="bg-blue-500 w-full rounded-lg p-4 mb-4"
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Login
        </Text>
      </Pressable>
      <Pressable
        className="bg-gray-500 w-full rounded-lg p-4"
        onPress={() => navigation.navigate('Register')}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Register
        </Text>
      </Pressable>
    </View>
  );
}; 