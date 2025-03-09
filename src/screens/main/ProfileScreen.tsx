import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const menuItems = [
  { id: '1', title: 'Edit Profile', icon: 'edit' },
  { id: '2', title: 'Privacy', icon: 'lock' },
  { id: '3', title: 'Notifications', icon: 'notifications' },
  { id: '4', title: 'Help', icon: 'help' },
  { id: '5', title: 'About', icon: 'info' },
];

export const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="bg-white p-6 items-center">
        <View className="w-24 h-24 bg-gray-300 rounded-full mb-4" />
        <Text className="text-xl font-bold">John Doe</Text>
        <Text className="text-gray-500">john.doe@example.com</Text>
      </View>

      <View className="mt-6 px-4">
        {menuItems.map(item => (
          <Pressable
            key={item.id}
            className="flex-row items-center bg-white p-4 mb-2 rounded-lg"
          >
            <MaterialIcons name={item.icon} size={24} color="#4B5563" />
            <Text className="ml-3 text-lg text-gray-700">{item.title}</Text>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color="#9CA3AF"
              style={{ marginLeft: 'auto' }}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}; 