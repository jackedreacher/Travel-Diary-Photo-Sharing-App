import React from 'react';
import { NavigatorFactory } from './NavigatorFactory';
import { navigationConfig } from './config';
import { ThemeProvider } from './ThemeProvider';
import { PhotoProvider } from '../context/PhotoContext';

export const Navigation: React.FC = () => {
  return (
    <ThemeProvider>
      <PhotoProvider>
        <NavigatorFactory config={navigationConfig} />
      </PhotoProvider>
    </ThemeProvider>
  );
}; 