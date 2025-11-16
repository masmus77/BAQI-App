import React, { useState, useRef, useEffect } from 'react';
import { surahsData, Surah, WordTiming } from '../data/data';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" /></svg>;

export const ReadingPracticeModule: React.FC = () => {
    const [selectedSurah, setSelectedSurah] = useState<Surah>(surahsData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeWordIndex, setActiveWordIndex] = useState(-1);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);
    const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        // Reset when surah changes
        setIsPlaying(false);
        setActiveWordIndex(-1);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            // Explicitly tell the browser to load the new audio source defined in the `src` attribute
            audioRef.current.load();
        }
    }, [selectedSurah]);

    // Apply audio settings whenever they change
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate;
            audioRef.current.volume = volume;
        }
    }, [playbackRate, volume]);

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        const currentTime = audioRef.current.currentTime;
        const currentWord = selectedSurah.timings.findIndex(timing => currentTime >= timing.start && currentTime <= timing.end);
        if (currentWord !== -1 && currentWord !== activeWordIndex) {
            setActiveWordIndex(currentWord);
            wordsRef.current[currentWord]?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    };
    
    const handleAudioEnd = () => {
        setIsPlaying(false);
        setActiveWordIndex(-1);
    };

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const handleSurahChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const surah = surahsData.find(s => s.name === e.target.value);
        if (surah) {
            setSelectedSurah(surah);
        }
    };
    
    // Prepare words with spans for highlighting
    const surahWords = selectedSurah.text.split(/(\s+|\(\d+\))/).filter(word => word.trim() !== '' && !/^\(\d+\)$/.test(word.trim()));

    const speedButtonClass = (rate: number) => `px-3 py-1 text-sm rounded-md transition-colors font-medium ${
        playbackRate === rate
        ? 'bg-primary-light text-white shadow-sm'
        : 'bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500'
    }`;

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary-dark dark:text-white mb-6">Latihan Membaca</h1>

            <Card>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <select
                        value={selectedSurah.name}
                        onChange={handleSurahChange}
                        className="bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg p-2 font-semibold"
                    >
                        {surahsData.map(surah => (
                            <option key={surah.name} value={surah.name}>
                                Surah {surah.name}
                            </option>
                        ))}
                    </select>
                    
                    <button
                        onClick={togglePlay}
                        className="flex items-center gap-2 px-6 py-3 bg-primary-light text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        <span>{isPlaying ? 'Jeda' : 'Mulai Baca'}</span>
                    </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
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
                            <label htmlFor="volume-reading" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Volume</label>
                            <input
                                id="volume-reading"
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

                <div 
                    className="mt-6 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-slate-900 rounded-lg"
                    dir="rtl"
                    lang="ar"
                >
                    <p className="text-3xl sm:text-4xl md:text-5xl font-arabic leading-relaxed text-right">
                        {surahWords.map((word, index) => {
                             // This is a simplified split, real timings would map to these words.
                            const timingIndex = index;
                            return (
                                <span key={index} className="inline-block">
                                    <span
                                        // FIX: A ref callback must not return a value. Converted to a block body to ensure a void return type.
                                        ref={el => { wordsRef.current[timingIndex] = el; }}
                                        className={`transition-colors duration-200 rounded-md px-1 ${
                                            activeWordIndex === timingIndex ? 'bg-yellow-300 text-black' : ''
                                        }`}
                                    >
                                        {word}
                                    </span>
                                    {' '}
                                </span>
                            );
                        })}
                    </p>
                </div>

                <audio
                    ref={audioRef}
                    src={selectedSurah.audio}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleAudioEnd}
                    className="hidden"
                >
                    Browser Anda tidak mendukung elemen audio.
                </audio>
            </Card>
        </div>
    );
};