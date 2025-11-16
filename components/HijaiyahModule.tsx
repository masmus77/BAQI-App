import React, { useState, useEffect, useRef } from 'react';
import { hijaiyahData, HijaiyahLetter } from '../data/data';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

// Defined outside to prevent re-creation on re-renders
const HijaiyahDetail: React.FC<{ letter: HijaiyahLetter }> = ({ letter }) => (
  <Card className="flex-1">
    <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">{letter.name}</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-600 dark:text-gray-400">Bentuk Huruf</h4>
        <div className="flex justify-around items-center mt-2 p-3 bg-gray-100 dark:bg-slate-700 rounded-lg text-2xl font-arabic">
          <span title="Akhir">{letter.bentuk.akhir || '-'}</span>
          <span title="Tengah">{letter.bentuk.tengah || '-'}</span>
          <span title="Awal">{letter.bentuk.awal || '-'}</span>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-600 dark:text-gray-400">Contoh Kata</h4>
        <p className="text-3xl font-arabic text-center mt-2 p-3 bg-gray-100 dark:bg-slate-700 rounded-lg">{letter.contoh}</p>
      </div>
    </div>
  </Card>
);

// Defined outside to prevent re-creation on re-renders
const QuizModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [question, setQuestion] = useState<HijaiyahLetter | null>(null);
    const [options, setOptions] = useState<HijaiyahLetter[]>([]);
    const [feedback, setFeedback] = useState<string>('');

    const generateQuestion = () => {
        setFeedback('');
        const randomIndex = Math.floor(Math.random() * hijaiyahData.length);
        const correctAnswer = hijaiyahData[randomIndex];
        setQuestion(correctAnswer);

        let randomOptions = [correctAnswer];
        while (randomOptions.length < 4) {
            const randomOptionIndex = Math.floor(Math.random() * hijaiyahData.length);
            const randomOption = hijaiyahData[randomOptionIndex];
            if (!randomOptions.find(opt => opt.huruf === randomOption.huruf)) {
                randomOptions.push(randomOption);
            }
        }
        setOptions(randomOptions.sort(() => Math.random() - 0.5));
    };

    useEffect(() => {
        generateQuestion();
    }, []);

    const handleAnswer = (selected: HijaiyahLetter) => {
        if (selected.huruf === question?.huruf) {
            setFeedback('Benar! ✅');
            setTimeout(generateQuestion, 1000);
        } else {
            setFeedback('Coba lagi! ❌');
        }
    };
    
    if (!question) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md m-4 transform transition-all animate-scale-in">
                <h2 className="text-2xl font-bold text-center mb-2">Ini Huruf Apa?</h2>
                <div className="text-8xl font-arabic text-center my-6 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">{question.huruf}</div>
                <div className="grid grid-cols-2 gap-4">
                    {options.map(opt => (
                        <button key={opt.huruf} onClick={() => handleAnswer(opt)} className="p-4 text-xl font-semibold bg-gray-200 dark:bg-slate-600 rounded-lg hover:bg-primary-light hover:text-white dark:hover:bg-primary-light transition-colors">
                            {opt.name}
                        </button>
                    ))}
                </div>
                {feedback && <p className="text-center mt-4 font-semibold">{feedback}</p>}
                 <button onClick={onClose} className="mt-6 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Tutup
                </button>
            </div>
        </div>
    );
};


export const HijaiyahModule: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<HijaiyahLetter>(hijaiyahData[0]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = (soundSrc: string) => {
    if (audioRef.current) {
        audioRef.current.src = soundSrc;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.volume = volume;
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
    }
  };
  
  const handleSelectLetter = (letter: HijaiyahLetter) => {
    setSelectedLetter(letter);
    playSound(letter.suara);
  };

  const speedButtonClass = (rate: number) => `px-3 py-1 text-sm rounded-md transition-colors font-medium ${
    playbackRate === rate
      ? 'bg-primary-light text-white shadow-sm'
      : 'bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500'
  }`;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-dark dark:text-white">Huruf Hijaiyah</h1>
        <button 
          onClick={() => setIsQuizOpen(true)}
          className="px-4 py-2 bg-primary-light text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-transform transform hover:scale-105"
        >
          Mulai Kuis
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <Card>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2 text-center">
              {hijaiyahData.map((letter) => (
                <button
                  key={letter.huruf}
                  onClick={() => handleSelectLetter(letter)}
                  className={`p-2 aspect-square flex items-center justify-center text-3xl font-arabic rounded-lg transition-all duration-200 transform hover:scale-110 ${
                    selectedLetter.huruf === letter.huruf
                      ? 'bg-primary-light text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {letter.huruf}
                </button>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
                <h4 className="font-semibold text-center mb-3 text-gray-700 dark:text-gray-300">Pengaturan Audio</h4>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Kecepatan</label>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setPlaybackRate(0.75)} className={speedButtonClass(0.75)}>Lambat</button>
                            <button onClick={() => setPlaybackRate(1)} className={speedButtonClass(1)}>Normal</button>
                            <button onClick={() => setPlaybackRate(1.25)} className={speedButtonClass(1.25)}>Cepat</button>
                        </div>
                    </div>
                    <div className="w-40 flex flex-col items-center">
                        <label htmlFor="volume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Volume</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
                        />
                    </div>
                </div>
            </div>
          </Card>
        </div>
        <div className="md:w-1/3">
          {selectedLetter && <HijaiyahDetail letter={selectedLetter} />}
        </div>
      </div>
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
      <audio ref={audioRef} className="hidden" />
    </div>
  );
};