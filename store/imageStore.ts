import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Image {
  id: string;
  url: string;
  prompt: string;
  liked: boolean;
  likes: number;
}

interface ImageStore {
  images: Image[];
  addImage: (image: Image) => void;
  likeImage: (id: string) => void;
}

export const useImageStore = create(
  persist<ImageStore>(
    (set) => ({
      images: [],
      addImage: (image) => set((state) => ({ images: [{ ...image, liked: false, likes: 0 }, ...state.images] })),
      likeImage: (id) => set((state) => ({
        images: state.images.map((img) =>
          img.id === id
            ? { ...img, liked: !img.liked, likes: img.liked ? img.likes - 1 : img.likes + 1 }
            : img
        ),
      })),
    }),
    {
      name: 'image-storage',
    }
  )
);
