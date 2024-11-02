import React, { useState } from 'react';
import { Volume2, Volume1, AlertCircle } from 'lucide-react';
import type { IconProps } from 'lucide-react';

interface Props {
  url: string;
  variant: 'US' | 'UK';
}

export default function AudioButton({ url, variant }: Props) {
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = variant === 'UK' ? Volume2 : Volume1;

  const playAudio = async () => {
    try {
      setError(false);
      setIsPlaying(true);
      const audio = new Audio(url);
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });

      audio.addEventListener('error', () => {
        setError(true);
        setIsPlaying(false);
      });

      await audio.play();
    } catch (err) {
      setError(true);
      setIsPlaying(false);
    }
  };

  return (
    <button 
      onClick={playAudio}
      disabled={isPlaying}
      className={`p-2 rounded-full transition-colors relative group
        ${error ? 'text-red-500 hover:bg-red-50' : 'text-blue-600 hover:bg-gray-100'}
        ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
    >
      <Icon className="w-6 h-6" />
      {error && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Failed to play audio
        </div>
      )}
    </button>
  );
}