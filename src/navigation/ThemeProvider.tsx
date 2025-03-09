import React, { createContext, useContext, useState, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// Theme type definition
export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

// Default themes
export const lightTheme: Theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#0066cc',
  },
};

export const darkTheme: Theme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#66b3ff',
  },
};

// Theme context
interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [theme, setTheme] = useState<Theme>(isDark ? darkTheme : lightTheme);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
    setTheme(isDark ? lightTheme : darkTheme);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 