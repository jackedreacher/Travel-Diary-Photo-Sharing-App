import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { theme } from '../theme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  loading = false,
  disabled = false,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500';
      case 'secondary':
        return 'bg-gray-500';
      case 'outline':
        return 'border border-blue-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getTextStyle = () => {
    return variant === 'outline' ? 'text-blue-500' : 'text-white';
  };

  return (
    <Pressable
      className={`${getButtonStyle()} p-4 rounded-lg ${
        disabled ? 'opacity-50' : ''
      }`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? theme.colors.primary : 'white'} />
      ) : (
        <Text className={`${getTextStyle()} text-center font-semibold`}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}; 