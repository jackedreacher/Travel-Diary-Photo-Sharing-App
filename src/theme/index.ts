import { DefaultTheme } from '@react-navigation/native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3B82F6',
    secondary: '#6B7280',
    background: '#F3F4F6',
    card: '#FFFFFF',
    text: '#1F2937',
    border: '#E5E7EB',
    notification: '#EF4444',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  roundness: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
}; 