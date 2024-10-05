import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

interface ImageStore {
  images: Image[];
  addImage: (image: Image) => void;
}

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      images: [],
      addImage: (image) => {
        console.log('Adding image to store:', image); // Add this line
        set((state) => ({ images: [image, ...state.images] }));
      },
    }),
    {
      name: 'image-storage',
    }
  )
);
