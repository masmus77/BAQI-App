
import React, { useState } from 'react';
import { harakatData, tasydidData, tasydidQuizData } from '../data/data';

const playSound = (soundSrc: string) => {
  const audio = new Audio(soundSrc);
  audio.play().catch(e => console.error("Error playing audio:", e));
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

export const HarakatModule: React.FC = () => {
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<{ [key: string]: string }>({});
    const [tasydidQuizFeedback, setTasydidQuizFeedback] = useState('');
    const [selectedQuizWord, setSelectedQuizWord] = useState<string | null>(null);

    const dropTargets = { 'Fathah (a)': 'َ', 'Kasrah (i)': 'ِ', 'Dammah (u)': 'ُ' };
    const letters = ['ب', 'ت', 'ث'];

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, letter: string) => {
        setDraggedItem(letter);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, harakatName: string, harakatSymbol: string) => {
        e.preventDefault();
        if (!draggedItem) return;
        
        const expectedLetter = harakatName.includes('a') ? 'ب' : harakatName.includes('i') ? 'ت' : 'ث';
        
        if (draggedItem === expectedLetter) {
            e.currentTarget.innerHTML = `<span class="text-5xl font-arabic">${draggedItem}${harakatSymbol}</span>`;
            e.currentTarget.classList.add('bg-green-200', 'dark:bg-green-800');
            setFeedback(prev => ({ ...prev, [harakatName]: 'Benar!' }));
        } else {
             e.currentTarget.classList.add('bg-red-200', 'dark:bg-red-800');
             setFeedback(prev => ({ ...prev, [harakatName]: 'Salah!' }));
             setTimeout(() => {
                e.currentTarget.classList.remove('bg-red-200', 'dark:bg-red-800');
                setFeedback(prev => ({ ...prev, [harakatName]: '' }));
             }, 1000);
        }
        setDraggedItem(null);
    };

    const handleTasydidQuiz = (word: string) => {
        setSelectedQuizWord(word);
        if (word === tasydidQuizData.correctAnswer) {
            setTasydidQuizFeedback('Benar! ✅');
        } else {
            setTasydidQuizFeedback('Coba lagi! ❌');
        }
        setTimeout(() => {
            setTasydidQuizFeedback('');
            setSelectedQuizWord(null);
        }, 1500);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary-dark dark:text-white mb-6">Harakat</h1>
            
            <Card className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Harakat Dasar</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {harakatData.map((item) => (
                        <button
                            key={item.huruf}
                            onClick={() => playSound(item.suara)}
                            className="p-4 w-24 h-24 flex items-center justify-center text-5xl font-arabic rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-primary-light hover:text-white transition-all transform hover:scale-110"
                        >
                            {item.huruf}
                        </button>
                    ))}
                </div>
            </Card>

            <Card className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Harakat Lanjutan: Tasydid ( ّ )</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Tasydid menandakan huruf ganda atau dibaca dengan ditekan.</p>
                
                <div className="mb-6">
                    <h3 className="font-semibold text-lg text-center mb-4">Contoh Pelafalan</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tasydidData.map((item) => (
                            <button
                                key={item.huruf}
                                onClick={() => playSound(item.suara)}
                                className="p-4 w-28 h-28 flex items-center justify-center text-5xl font-arabic rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-primary-light hover:text-white transition-all transform hover:scale-110"
                            >
                                {item.huruf}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-center mb-4">Latihan: Temukan Tasydid</h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Klik pada kata yang mengandung Tasydid.</p>
                    <div className="flex justify-center gap-4">
                        {tasydidQuizData.options.map(word => {
                            const isSelected = selectedQuizWord === word;
                            const isCorrect = word === tasydidQuizData.correctAnswer;
                            let buttonClass = 'bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500';
                            if (isSelected) {
                                buttonClass = isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
                            }

                            return (
                                <button
                                    key={word}
                                    onClick={() => handleTasydidQuiz(word)}
                                    className={`px-6 py-3 text-3xl font-arabic rounded-lg transition-colors ${buttonClass}`}
                                >
                                    {word}
                                </button>
                            );
                        })}
                    </div>
                    {tasydidQuizFeedback && <p className="text-center mt-4 font-semibold">{tasydidQuizFeedback}</p>}
                </div>
            </Card>

            <Card>
                <h2 className="text-2xl font-semibold mb-4">Latihan Drag & Drop Harakat Dasar</h2>
                <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
                  Tarik huruf di bawah ke kotak harakat yang sesuai. (Petunjuk: ب untuk Fathah, ت untuk Kasrah, ث untuk Dammah)
                </p>

                <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                    {/* Drop Targets */}
                    <div className="flex justify-center gap-4">
                        {Object.entries(dropTargets).map(([name, symbol]) => (
                            <div key={name}>
                                <div
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, name, symbol)}
                                    className="w-28 h-28 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-lg flex flex-col justify-center items-center transition-colors"
                                >
                                    <span className="text-sm font-semibold">{name}</span>
                                </div>
                                <p className="text-center mt-2 h-6">{feedback[name] || ''}</p>
                            </div>
                        ))}
                    </div>
                    {/* Draggable Items */}
                    <div className="flex justify-center gap-4 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg">
                        {letters.map(letter => (
                             <div
                                key={letter}
                                draggable
                                onDragStart={(e) => handleDragStart(e, letter)}
                                className="w-20 h-20 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center text-5xl font-arabic cursor-grab active:cursor-grabbing"
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
};