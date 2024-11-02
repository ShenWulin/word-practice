import React from 'react';
import { Check } from 'lucide-react';
import type { Word } from '../types';

interface Props {
  show: boolean;
  word?: Word;
}

export default function SuccessAnimation({ show, word }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <div className="transform animate-success-popup bg-white rounded-2xl p-8 shadow-xl max-w-sm w-full mx-4">
        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-4 mb-3">
            <Check className="w-12 h-12 text-white animate-success-check" />
          </div>
          <div className="text-green-500 font-bold text-2xl text-center animate-success-text mb-6">
            Good Job!
          </div>
          {word && (
            <div className="w-full animate-success-details">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{word.word}</h3>
                <p className="text-gray-500 text-sm">{word.phonetic}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-center">{word.meaning}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}