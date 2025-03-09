import React from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const settings = [
  {
    id: '1',
    title: 'Dark Mode',
    icon: 'dark-mode',
    type: 'switch',
  },
  {
    id: '2',
    title: 'Push Notifications',
    icon: 'notifications',
    type: 'switch',
  },
  {
    id: '3',
    title: 'Language',
    icon: 'language',
    value: 'English',
    type: 'value',
  },
  {
    id: '4',
    title: 'App Version',
    icon: 'info',
    value: '1.0.0',
    type: 'value',
  },
];

export const SettingsScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-4">
        {settings.map(setting => (
          <View
            key={setting.id}
            className="flex-row items-center justify-between bg-white p-4 mb-2 rounded-lg"
          >
            <View className="flex-row items-center">
              <MaterialIcons name={setting.icon} size={24} color="#4B5563" />
              <Text className="ml-3 text-lg text-gray-700">{setting.title}</Text>
            </View>
            {setting.type === 'switch' ? (
              <Switch />
            ) : (
              <Text className="text-gray-500">{setting.value}</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}; 