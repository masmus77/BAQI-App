
import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

export const AboutPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <Card>
                <h1 className="text-3xl font-bold text-center text-primary-dark dark:text-white mb-6">Tentang Aplikasi Iqra'</h1>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-primary-light mb-2">Tujuan Aplikasi</h2>
                        <p>
                            Aplikasi ini dirancang sebagai alat bantu interaktif bagi pemula yang ingin memulai perjalanan belajar membaca Al-Qur'an. 
                            Kami percaya bahwa teknologi dapat mempermudah akses terhadap ilmu dan membuat proses belajar menjadi lebih menyenangkan dan efektif.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary-light mb-2">Cara Menggunakan</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Huruf Hijaiyah:</strong> Kenali 29 huruf dasar, dengarkan pelafalannya, lihat bentuknya saat disambung, dan coba kuis interaktif.</li>
                            <li><strong>Harakat:</strong> Pelajari tanda baca dasar (fathah, kasrah, dammah) dan coba latihan drag-and-drop untuk menguji pemahaman.</li>
                            <li><strong>Tajwid:</strong> Pahami aturan-aturan dasar tajwid seperti hukum Nun & Mim Sukun dengan penjelasan ringkas dan contoh visual.</li>
                            <li><strong>Latihan Baca:</strong> Latih kemampuan membaca Anda dengan surah-surah pendek yang dilengkapi audio dan highlight per kata (gaya karaoke).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary-light mb-2">Catatan Kredibilitas</h2>
                        <p>
                            Materi dalam aplikasi ini disusun berdasarkan sumber-sumber yang umum digunakan dalam pembelajaran Al-Qur'an. Namun, aplikasi ini hanyalah alat bantu. 
                            Untuk pembelajaran yang mendalam dan koreksi pelafalan (talaqqi), sangat disarankan untuk belajar langsung dengan guru yang kompeten.
                        </p>
                    </section>
                </div>
            </Card>
        </div>
    );
};
