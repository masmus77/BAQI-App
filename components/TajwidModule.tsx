import React, { useState } from 'react';
import { tajwidData } from '../data/data';

type TajwidCategory = keyof typeof tajwidData;

const Card: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md ${className}`} style={style}>
    {children}
  </div>
);

export const TajwidModule: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<TajwidCategory>('Makharijul Huruf');

    const categories = Object.keys(tajwidData) as TajwidCategory[];

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary-dark dark:text-white mb-6">Dasar-Dasar Tajwid</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                            activeCategory === category
                                ? 'bg-primary-light text-white shadow-md'
                                : 'bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tajwidData[activeCategory].map((rule, index) => (
                    <Card 
                        key={`${activeCategory}-${rule.name}`} 
                        className="animate-card-entry"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center mb-3">
                            <span className="text-3xl mr-3">{rule.emoji}</span>
                            <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light">{rule.name}</h3>
                        </div>
                        <p 
                            className="text-gray-600 dark:text-gray-300 mb-4"
                            dangerouslySetInnerHTML={{ __html: rule.desc }}
                        />
                        <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                            <p className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">Contoh</p>
                            <p 
                                className="text-3xl font-arabic"
                                lang="ar" 
                                dangerouslySetInnerHTML={{ __html: rule.contoh }}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};