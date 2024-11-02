import React, { useState } from 'react';
import DictationCard from './components/DictationCard';
import { sampleWords } from './data/words';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < sampleWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleComplete = (correct: number, total: number) => {
    setScore({ correct, total });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Word Dictation Practice
        </h1>
        
        {!isComplete ? (
          <>
            <div className="mb-6 text-center text-gray-600">
              Word {currentIndex + 1} of {sampleWords.length}
            </div>
            <DictationCard
              word={sampleWords[currentIndex]}
              onNext={handleNext}
              onPrev={handlePrev}
              onComplete={handleComplete}
            />
          </>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Complete!</h2>
            <p className="text-lg text-gray-600">
              You got {score.correct} out of {score.total} words correct.
            </p>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setIsComplete(false);
                setScore({ correct: 0, total: 0 });
              }}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;