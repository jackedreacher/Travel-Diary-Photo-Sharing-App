import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  time: string;
}

const dummyNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Message',
    message: 'You have a new message from John',
    type: 'info',
    time: '5m ago',
  },
  {
    id: '2',
    title: 'Post Liked',
    message: 'Your post was liked by Sarah',
    type: 'success',
    time: '10m ago',
  },
  {
    id: '3',
    title: 'Update Required',
    message: 'Please update your app to the latest version',
    type: 'warning',
    time: '1h ago',
  },
];

export const NotificationsScreen = () => {
  const getIconName = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return 'info';
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'warning';
      default:
        return 'notifications';
    }
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <Pressable className="bg-white p-4 mb-2 rounded-lg flex-row items-center">
      <MaterialIcons
        name={getIconName(item.type)}
        size={24}
        color={item.type === 'warning' ? '#F59E0B' : '#3B82F6'}
      />
      <View className="flex-1 ml-3">
        <Text className="font-bold text-gray-900">{item.title}</Text>
        <Text className="text-gray-600 mt-1">{item.message}</Text>
        <Text className="text-gray-400 text-sm mt-1">{item.time}</Text>
      </View>
    </Pressable>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={dummyNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerClassName="p-4"
      />
    </View>
  );
}; 