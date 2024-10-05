"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';

interface ImageGeneratorProps {
  onImageGenerated: (image: { id: string; url: string; prompt: string }) => void;
}

export default function ImageGenerator({ onImageGenerated }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      console.log('API response:', data);

      // Extract the URL from the array
      const imageUrl = data.imageUrl[0];
      setGeneratedImage(imageUrl);

      const newImage = {
        id: Date.now().toString(),
        url: imageUrl,
        prompt: prompt,
      };
      console.log('New image object:', newImage);
      onImageGenerated(newImage);
    } catch (err) {
      console.error('Error generating image:', err);
      // setError('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-8">
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" disabled={isGenerating || !prompt.trim()}>
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Image'
          )}
        </Button>
      </div>
    </form>
  );
}