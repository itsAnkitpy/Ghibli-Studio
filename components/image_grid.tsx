"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { Heart, Download } from 'lucide-react';
import ImageGenerator from './image_generator';
import { useImageStore } from '../store/imageStore';

export default function ImageGrid() {
  const { images, addImage } = useImageStore();

  const handleImageGenerated = (newImage) => {
    console.log('Handling new image:', newImage);
    addImage(newImage);
  };

  useEffect(() => {
    useImageStore.persist.rehydrate();
  }, []);

  console.log('Current images in store:', images);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ImageGenerator onImageGenerated={handleImageGenerated} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {images.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">No images available</p>
        ) : (
          images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.url}
                alt={image.prompt}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  console.error('Image load error:', e);
                  console.log('Failed image URL:', image.url);
                  // Optionally set a fallback image
                  e.currentTarget.src = '/path/to/fallback-image.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <button className="text-white p-2 hover:text-blue-400 transition-colors">
                  <Heart size={24} />
                </button>
                <button className="text-white p-2 hover:text-blue-400 transition-colors">
                  <Download size={24} />
                </button>
              </div>
              {/* <p className="mt-2 text-sm text-gray-600">{image.prompt}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}