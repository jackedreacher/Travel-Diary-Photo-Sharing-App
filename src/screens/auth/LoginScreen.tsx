import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList, RootStackParamList } from '../../navigation/config';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList & RootStackParamList, 'Login'>;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1 justify-center">
        <Text className="text-2xl font-bold mb-8 text-center">Login</Text>
        <TextInput
          placeholder="Email"
          className="bg-gray-100 p-4 rounded-lg mb-4"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          className="bg-gray-100 p-4 rounded-lg mb-6"
          secureTextEntry
        />
        <Pressable
          className="bg-blue-500 p-4 rounded-lg mb-4"
          onPress={() => navigation.navigate('Main', { screen: 'Camera' })}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}; 