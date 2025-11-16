export interface HijaiyahLetter {
  name: string;
  huruf: string;
  suara: string;
  bentuk: {
    awal: string | null;
    tengah: string | null;
    akhir: string | null;
  };
  contoh: string;
}

export const hijaiyahData: HijaiyahLetter[] = [
  { name: "Alif", huruf: "ا", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/alif.mp3", bentuk: { awal: "ا", tengah: "ـا", akhir: "ـا" }, contoh: "أَسَد" },
  { name: "Ba'", huruf: "ب", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ba.mp3", bentuk: { awal: "بـ", tengah: "ـبـ", akhir: "ـب" }, contoh: "بَاب" },
  { name: "Ta'", huruf: "ت", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ta.mp3", bentuk: { awal: "تـ", tengah: "ـتـ", akhir: "ـت" }, contoh: "تَمْر" },
  { name: "Tsa'", huruf: "ث", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tsa.mp3", bentuk: { awal: "ثـ", tengah: "ـثـ", akhir: "ـث" }, contoh: "ثَوْب" },
  { name: "Jim", huruf: "ج", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/jim.mp3", bentuk: { awal: "جـ", tengah: "ـجـ", akhir: "ـج" }, contoh: "جَمَل" },
  { name: "Ha'", huruf: "ح", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ha.mp3", bentuk: { awal: "حـ", tengah: "ـحـ", akhir: "ـح" }, contoh: "حُوت" },
  { name: "Kha'", huruf: "خ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/kha.mp3", bentuk: { awal: "خـ", tengah: "ـخـ", akhir: "ـخ" }, contoh: "خُبْز" },
  { name: "Dal", huruf: "د", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/dal.mp3", bentuk: { awal: "د", tengah: "ـد", akhir: "ـد" }, contoh: "دُبّ" },
  { name: "Dzal", huruf: "ذ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/dzal.mp3", bentuk: { awal: "ذ", tengah: "ـذ", akhir: "ـذ" }, contoh: "ذَهَب" },
  { name: "Ra'", huruf: "ر", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ra.mp3", bentuk: { awal: "ر", tengah: "ـر", akhir: "ـر" }, contoh: "رَأْس" },
  { name: "Zay", huruf: "ز", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/zay.mp3", bentuk: { awal: "ز", tengah: "ـز", akhir: "ـز" }, contoh: "زَهْرَة" },
  { name: "Sin", huruf: "س", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/sin.mp3", bentuk: { awal: "سـ", tengah: "ـسـ", akhir: "ـس" }, contoh: "سَمَك" },
  { name: "Syin", huruf: "ش", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/syin.mp3", bentuk: { awal: "شـ", tengah: "ـشـ", akhir: "ـش" }, contoh: "شَمْس" },
  { name: "Shad", huruf: "ص", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/shad.mp3", bentuk: { awal: "صـ", tengah: "ـصـ", akhir: "ـص" }, contoh: "صَقْر" },
  { name: "Dhad", huruf: "ض", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/dhad.mp3", bentuk: { awal: "ضـ", tengah: "ـضـ", akhir: "ـض" }, contoh: "ضِفْدَع" },
  { name: "Tha'", huruf: "ط", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tha.mp3", bentuk: { awal: "طـ", tengah: "ـطـ", akhir: "ـط" }, contoh: "طَائِرَة" },
  { name: "Zha'", huruf: "ظ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/zha.mp3", bentuk: { awal: "ظـ", tengah: "ـظـ", akhir: "ـظ" }, contoh: "ظَرْف" },
  { name: "Ain", huruf: "ع", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ain.mp3", bentuk: { awal: "عـ", tengah: "ـعـ", akhir: "ـع" }, contoh: "عَيْن" },
  { name: "Ghain", huruf: "غ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ghain.mp3", bentuk: { awal: "غـ", tengah: "ـغـ", akhir: "ـغ" }, contoh: "غُرَاب" },
  { name: "Fa'", huruf: "ف", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/fa.mp3", bentuk: { awal: "فـ", tengah: "ـفـ", akhir: "ـف" }, contoh: "فِيل" },
  { name: "Qaf", huruf: "ق", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/qaf.mp3", bentuk: { awal: "قـ", tengah: "ـقـ", akhir: "ـق" }, contoh: "قَلَم" },
  { name: "Kaf", huruf: "ك", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/kaf.mp3", bentuk: { awal: "كـ", tengah: "ـكـ", akhir: "ـك" }, contoh: "كِتَاب" },
  { name: "Lam", huruf: "ل", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/lam.mp3", bentuk: { awal: "لـ", tengah: "ـلـ", akhir: "ـل" }, contoh: "لَيْمُون" },
  { name: "Mim", huruf: "م", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/mim.mp3", bentuk: { awal: "مـ", tengah: "ـمـ", akhir: "ـم" }, contoh: "مَوْز" },
  { name: "Nun", huruf: "ن", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/nun.mp3", bentuk: { awal: "نـ", tengah: "ـنـ", akhir: "ـن" }, contoh: "نَجْم" },
  { name: "Waw", huruf: "و", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/waw.mp3", bentuk: { awal: "و", tengah: "ـو", akhir: "ـو" }, contoh: "وَرْدَة" },
  { name: "Ha", huruf: "ه", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ha-2.mp3", bentuk: { awal: "هـ", tengah: "ـهـ", akhir: "ـه" }, contoh: "هِلال" },
  { name: "Lam Alif", huruf: "لا", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/lam-alif.mp3", bentuk: { awal: null, tengah: null, akhir: "ـلا" }, contoh: "مَاء" },
  { name: "Ya'", huruf: "ي", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ya.mp3", bentuk: { awal: "يـ", tengah: "ـيـ", akhir: "ـي" }, contoh: "يَد" },
];

export const harakatData = [
    { huruf: "بَ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ba.mp3" }, { huruf: "بِ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/bi.mp3" }, { huruf: "بُ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/bu.mp3" },
    { huruf: "تَ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ta.mp3" }, { huruf: "تِ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/ti.mp3" }, { huruf: "تُ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tu.mp3" },
    { huruf: "ثَ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tsa.mp3" }, { huruf: "ثِ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tsi.mp3" }, { huruf: "ثُ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/tsu.mp3" },
];

export const tasydidData = [
    { huruf: "رَبِّ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/rabbi.mp3" },
    { huruf: "إِنَّ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/inna.mp3" },
    { huruf: "الحَقُّ", suara: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/al-haqqu.mp3" },
];

export const tasydidQuizData = {
    options: ["كَتَبَ", "يَدُ", "الحَقُّ"],
    correctAnswer: "الحَقُّ"
};

export const tajwidData = {
  "Makharijul Huruf": [
    { 
      name: "Al-Jauf (Rongga Mulut & Tenggorokan)", 
      emoji: "😮", 
      desc: "Tempat keluarnya huruf-huruf Mad (bacaan panjang).<br><b>Huruf:</b> Alif sukun (ا) setelah Fathah, Waw sukun (و) setelah Dammah, dan Ya' sukun (ي) setelah Kasrah.", 
      contoh: `قَ<span class="text-blue-500 font-bold">الَ</span> &nbsp;&nbsp; يَقُ<span class="text-blue-500 font-bold">وْلُ</span> &nbsp;&nbsp; قِ<span class="text-blue-500 font-bold">يْلَ</span>` 
    },
    { 
      name: "Al-Halq (Tenggorokan)", 
      emoji: "🗣️", 
      desc: "Tempat keluarnya 6 huruf dari tiga bagian tenggorokan:<br>• <b>Pangkal:</b> ء (Hamzah), ه (Ha')<br>• <b>Tengah:</b> ع ('Ain), ح (Ha)<br>• <b>Ujung:</b> غ (Ghain), خ (Kha')", 
      contoh: `<span class="text-green-500 font-bold">أَ</span>nْعَمْتَ &nbsp;&nbsp; <span class="text-green-500 font-bold">حَ</span>اسِدٍ &nbsp;&nbsp; <span class="text-green-500 font-bold">غَ</span>اسِقٍ` 
    },
    { 
      name: "Al-Lisan (Lidah)", 
      emoji: "👅", 
      desc: "Tempat keluarnya 18 huruf dari berbagai bagian lidah:<br>• <b>Pangkal Lidah:</b> ق , ك<br>• <b>Tengah Lidah:</b> ج , ش , ي<br>• <b>Sisi Lidah:</b> ض<br>• <b>Ujung Lidah (bertemu gusi atas):</b> ل , ن , ر<br>• <b>Ujung Lidah (bertemu pangkal gigi seri atas):</b> ت , د , ط<br>• <b>Ujung Lidah (bertemu ujung gigi seri atas):</b> ث , ذ , ظ<br>• <b>Ujung Lidah (di antara gigi seri atas & bawah):</b> س , ص , ز", 
      contoh: `<span class="text-red-500 font-bold">قُ</span>لْ &nbsp;&nbsp; <span class="text-red-500 font-bold">ضَ</span>لَّ &nbsp;&nbsp; <span class="text-red-500 font-bold">لَ</span>مْ` 
    },
    { 
      name: "Asy-Syafatain (Dua Bibir)", 
      emoji: "👄", 
      desc: "Tempat keluarnya 4 huruf dari bibir:<br>• <b>Bibir bawah & ujung gigi seri atas:</b> ف<br>• <b>Kedua bibir (dimonyongkan):</b> و<br>• <b>Kedua bibir (dirapatkan):</b> ب , م", 
      contoh: `عَلَيْهِ<span class="text-purple-500 font-bold">مْ</span> &nbsp;&nbsp; <span class="text-purple-500 font-bold">بِ</span>سْمِ` 
    },
    { 
      name: "Al-Khaisyum (Rongga Hidung)", 
      emoji: "👃", 
      desc: "Rongga hidung, merupakan tempat keluarnya sifat <b>Ghunnah (dengung)</b>. Sifat ini menyertai huruf Nun (ن) dan Mim (م) ketika bertasydid atau dalam kondisi Ikhfa'/Idgham.", 
      contoh: `إِ<span class="text-orange-500 font-bold">نَّ</span> &nbsp;&nbsp; عَ<span class="text-orange-500 font-bold">مَّ</span>` 
    },
  ],
  "Nun Sukun & Tanwin": [
    { name: "Idgham", emoji: "💚", desc: "Meleburkan suara Nun sukun (نْ) atau Tanwin ke dalam huruf setelahnya. Dengan dengung (Bighunnah) untuk ي, ن, م, و dan tanpa dengung (Bilaghunnah) untuk ل, ر.", contoh: `فَمَ<span class="text-green-500 font-bold">نْ يَّ</span>عْمَلْ &nbsp;&nbsp; مِ<span class="text-green-500 font-bold">نْ رَّ</span>بِّهِمْ` },
    { name: "Ikhfa'", emoji: "💙", desc: "Menyamarkan suara Nun sukun atau Tanwin (dibaca samar dengan dengung) jika bertemu salah satu dari 15 huruf: ت, ث, ج, د, ذ, ز, س, ش, ص, ض, ط, ظ, ف, ق, ك.", contoh: `مِ<span class="text-blue-500 font-bold">نْ قَ</span>بْلُ &nbsp;&nbsp; رَجُ<span class="text-blue-500 font-bold">لًا سَ</span>لَمًا` },
    { name: "Iqlab", emoji: "💛", desc: "Mengganti suara Nun sukun atau Tanwin menjadi suara Mim (م) disertai dengung, jika bertemu huruf Ba' (ب).", contoh: `سَمِيْعٌ<span class="text-yellow-500 font-bold">ۢ بَ</span>صِيْرٌ` },
    { name: "Izhar", emoji: "⚪", desc: "Membaca suara Nun sukun atau Tanwin dengan jelas tanpa dengung jika bertemu 6 huruf Halq (tenggorokan): ء, ه, ع, ح, غ, خ.", contoh: `مِ<span class="text-teal-500 font-bold">نْهُ</span>مْ &nbsp;&nbsp; عَذَابٌ<span class="text-teal-500 font-bold"> أَلِيْمٌ</span>` },
  ],
  "Mim Sukun": [
    { name: "Ikhfa' Syafawi", emoji: "💙", desc: "Menyamarkan suara Mim sukun (مْ) dengan dengung jika bertemu huruf Ba' (ب).", contoh: `تَرْمِيْهِ<span class="text-blue-500 font-bold">مْ بِ</span>حِجَارَةٍ` },
    { name: "Idgham Mimi", emoji: "💚", desc: "Meleburkan Mim sukun (مْ) ke huruf Mim (م) setelahnya, dibaca dengan dengung.", contoh: `لَهُ<span class="text-green-500 font-bold">مْ مَّ</span>ا يَشَاۤءُوْنَ` },
    { name: "Izhar Syafawi", emoji: "⚪", desc: "Membaca Mim sukun (مْ) dengan jelas tanpa dengung jika bertemu semua huruf selain Mim (م) dan Ba' (ب).", contoh: `لَ<span class="text-teal-500 font-bold">مْ يَ</span>لِدْ &nbsp;&nbsp; عَلَيْهِ<span class="text-teal-500 font-bold">مْ وَ</span>لَا` },
  ],
  "Tafkhim & Tarqiq": [
     { name: "Tafkhim (Tebal)", emoji: "💪", desc: "Membaca huruf dengan tebal. Berlaku pada huruf Ra' (ر) berharakat Fathah/Dammah, dan seluruh huruf Isti'la (استعلاء): خ, ص, ض, غ, ط, ق, ظ.", contoh: `ٱل<span class="text-blue-500 font-bold">رَّ</span>حْمَٰنِ &nbsp;&nbsp; <span class="text-blue-500 font-bold">صِ</span>رَاطَ` },
     { name: "Tarqiq (Tipis)", emoji: "🍃", desc: "Membaca huruf dengan tipis. Berlaku pada huruf Ra' (ر) berharakat Kasrah, atau sukun yang didahului Kasrah.", contoh: `فِ<span class="text-green-500 font-bold">رْ</span>عَوْنَ` },
     { name: "Lam Jalalah", emoji: "☝️", desc: "Hukum Lam (ل) pada lafaz Allah (الله). Tebal jika didahului fathah/dammah, tipis jika didahului kasrah.", contoh: `قُلْ هُوَ <span class="text-blue-500 font-bold">اللّٰهُ</span> / بِسْمِ <span class="text-green-500 font-bold">اللّٰهِ</span>` },
  ]
};

export interface WordTiming {
  word: string;
  start: number;
  end: number;
}
export interface Surah {
  name: string;
  ayat: number;
  text: string;
  timings: WordTiming[];
  audio: string;
}
export const surahsData: Surah[] = [
    {
        name: "An-Nas",
        ayat: 6,
        audio: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/an-nas.mp3",
        text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَٰهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)",
        timings: [
            { word: "قُلْ", start: 0.5, end: 0.8 }, { word: "أَعُوذُ", start: 0.9, end: 1.5 }, { word: "بِرَبِّ", start: 1.6, end: 2.1 }, { word: "النَّاسِ", start: 2.2, end: 3.0 },
            { word: "مَلِكِ", start: 3.8, end: 4.3 }, { word: "النَّاسِ", start: 4.4, end: 5.2 },
            { word: "إِلَٰهِ", start: 6.0, end: 6.5 }, { word: "النَّاسِ", start: 6.6, end: 7.4 },
            { word: "مِنْ", start: 8.1, end: 8.3 }, { word: "شَرِّ", start: 8.4, end: 8.8 }, { word: "الْوَسْوَاسِ", start: 8.9, end: 9.8 }, { word: "الْخَنَّاسِ", start: 9.9, end: 11.0 },
            { word: "الَّذِي", start: 11.8, end: 12.3 }, { word: "يُوَسْوِسُ", start: 12.4, end: 13.2 }, { word: "فِي", start: 13.3, end: 13.5 }, { word: "صُدُورِ", start: 13.6, end: 14.3 }, { word: "النَّاسِ", start: 14.4, end: 15.2 },
            { word: "مِنَ", start: 16.0, end: 16.3 }, { word: "الْجِنَّةِ", start: 16.4, end: 17.2 }, { word: "وَالنَّاسِ", start: 17.3, end: 18.5 },
        ]
    },
    {
        name: "Al-Falaq",
        ayat: 5,
        audio: "https://raw.githubusercontent.com/prapt-project/belajar-ngaji-assets/main/audio/al-falaq.mp3",
        text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)",
        timings: [
             { word: "قُلْ", start: 0.5, end: 0.8 }, { word: "أَعُوذُ", start: 0.9, end: 1.5 }, { word: "بِرَبِّ", start: 1.6, end: 2.1 }, { word: "الْفَلَقِ", start: 2.2, end: 3.0 },
             { word: "مِنْ", start: 3.8, end: 4.0 }, { word: "شَرِّ", start: 4.1, end: 4.5 }, { word: "مَا", start: 4.6, end: 4.8 }, { word: "خَلَقَ", start: 4.9, end: 5.5 },
             { word: "وَمِنْ", start: 6.2, end: 6.5 }, { word: "شَرِّ", start: 6.6, end: 7.0 }, { word: "غَاسِقٍ", start: 7.1, end: 7.8 }, { word: "إِذَا", start: 7.9, end: 8.3 }, { word: "وَقَبَ", start: 8.4, end: 9.0 },
             { word: "وَمِنْ", start: 9.8, end: 10.1 }, { word: "شَرِّ", start: 10.2, end: 10.6 }, { word: "النَّفَّاثَاتِ", start: 10.7, end: 11.8 }, { word: "فِي", start: 11.9, end: 12.1 }, { word: "الْعُقَدِ", start: 12.2, end: 13.0 },
             { word: "وَمِنْ", start: 13.8, end: 14.1 }, { word: "شَرِّ", start: 14.2, end: 14.6 }, { word: "حَاسِدٍ", start: 14.7, end: 15.4 }, { word: "إِذَا", start: 15.5, end: 15.9 }, { word: "حَسَدَ", start: 16.0, end: 16.8 },
        ]
    }
];