import React, { createContext, useContext, useState } from 'react';

export interface PhotoData {
  id: string;
  uri: string;
  location: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
  title?: string;
}

interface PhotoContextType {
  photos: PhotoData[];
  addPhoto: (photo: Omit<PhotoData, 'id'>) => void;
  removePhoto: (id: string) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  const addPhoto = (photo: Omit<PhotoData, 'id'>) => {
    const newPhoto: PhotoData = {
      ...photo,
      id: Date.now().toString(),
    };
    setPhotos((prev) => [...prev, newPhoto]);
  };

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  return (
    <PhotoContext.Provider value={{ photos, addPhoto, removePhoto }}>
      {children}
    </PhotoContext.Provider>
  );
}; 