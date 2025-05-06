// src/contexts/GalleryContext.tsx
import 'react'
import  { createContext, useContext, useState, ReactNode } from 'react';
import { IImage } from '../Types';

interface GalleryContextProps {
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  currentImage: IImage | null;
  setCurrentImage: React.Dispatch<React.SetStateAction<IImage | null>>;
  count:number;
  setCount:React.Dispatch<React.SetStateAction<number>>
}

const GalleryContext = createContext<GalleryContextProps | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<IImage[]>([]);
  const [count, setCount] = useState<number>(9);

  const [currentImage, setCurrentImage] = useState<IImage | null>(null);

  return (
    <GalleryContext.Provider value={{ images, setImages, currentImage, setCurrentImage, count, setCount }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = (): GalleryContextProps => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};
