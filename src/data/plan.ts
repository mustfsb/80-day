export interface Task {
  id: string;
  title: string;
}

export interface Day {
  dayNumber: number;
  tasks: Task[];
}

export interface Phase {
  id: number;
  name: string;
  days: Day[];
}

export const planData: Phase[] = [
  {
    id: 1,
    name: "1. AŞAMA: İLK ADIMLAR VE DİL BİLGİSİ TEMELİ",
    days: [
      {
        dayNumber: 1,
        tasks: [
          { id: "d1-t1", title: "Türkçe: Ses Bilgisi (Ünlüler)" },
          { id: "d1-t2", title: "Matematik: 2. Dereceden Denklemler (Kök bulma)" },
          { id: "d1-t3", title: "Kimya: Modern Atom Modeli" },
          { id: "d1-t4", title: "Biyoloji: Hücre Zarı ve Madde Geçişleri" }
        ]
      },
      {
        dayNumber: 2,
        tasks: [
          { id: "d2-t1", title: "Türkçe: Ses Bilgisi (Ünsüzler)" },
          { id: "d2-t2", title: "Matematik: 2. Der. Denk. (Kök-Katsayı)" },
          { id: "d2-t3", title: "Kimya: Periyodik Sistem" },
          { id: "d2-t4", title: "Biyoloji: Organeller (Zarsız/Tek Zarlılar)" }
        ]
      },
      {
        dayNumber: 3,
        tasks: [
          { id: "d3-t1", title: "Türkçe: Ses Bilgisi (Soru Çözümü)" },
          { id: "d3-t2", title: "Matematik: 2. Der. Denk. (Denklem yazma)" },
          { id: "d3-t3", title: "Kimya: Kuantum Sayıları" },
          { id: "d3-t4", title: "Biyoloji: Organeller (Çift Zarlılar)" }
        ]
      },
      {
        dayNumber: 4,
        tasks: [
          { id: "d4-t1", title: "Türkçe: Yazım Kuralları (Büyük Harfler)" },
          { id: "d4-t2", title: "Matematik: Karmaşık Sayılara Giriş" },
          { id: "d4-t3", title: "Kimya: Elementlerin Sınıflandırılması" },
          { id: "d4-t4", title: "Biyoloji: Hücre Bölünmeleri (Mitoz)" }
        ]
      },
      {
        dayNumber: 5,
        tasks: [
          { id: "d5-t1", title: "Türkçe: Yazım Kuralları (Sayılar/Kısaltmalar)" },
          { id: "d5-t2", title: "Matematik: 2. Der. Denk. (Karma Test)" },
          { id: "d5-t3", title: "Kimya: Yükseltgenme Basamakları" },
          { id: "d5-t4", title: "Biyoloji: Eşeyli Üreme ve Mayoz" }
        ]
      },
      {
        dayNumber: 6,
        tasks: [
          { id: "d6-t1", title: "Türkçe: Yazım Kuralları (Bitişik/Ayrı)" },
          { id: "d6-t2", title: "Matematik: Eşitsizliklere Giriş" },
          { id: "d6-t3", title: "Kimya: Modern Atom Soru Çözümü" },
          { id: "d6-t4", title: "Biyoloji: Mitoz/Mayoz Karşılaştırmalı Soru Çözümü" }
        ]
      },
      {
        dayNumber: 7,
        tasks: [
          { id: "d7-t1", title: "Haftalık Genel Tekrar ve Mini Branş Denemesi" }
        ]
      },
      {
        dayNumber: 8,
        tasks: [
          { id: "d8-t1", title: "Türkçe: Yazım Kuralları (De, Ki, Mi)" },
          { id: "d8-t2", title: "Matematik: Eşitsizlikler (Çarpım/Bölüm)" },
          { id: "d8-t3", title: "TYT Kimya: Kimya Disiplinleri" },
          { id: "d8-t4", title: "TYT Biyoloji: Canlıların Ortak Özellikleri" }
        ]
      },
      {
        dayNumber: 9,
        tasks: [
          { id: "d9-t1", title: "Türkçe: Yazım Kuralları Soru Çözümü" },
          { id: "d9-t2", title: "Matematik: Eşitsizlikler (Grafik)" },
          { id: "d9-t3", title: "TYT Kimya: Atom ve Yapısı" },
          { id: "d9-t4", title: "TYT Biyoloji: İnorganik Bileşikler" }
        ]
      },
      {
        dayNumber: 10,
        tasks: [
          { id: "d10-t1", title: "Türkçe: Noktalama (Nokta, Virgül)" },
          { id: "d10-t2", title: "Matematik: Eşitsizlik Sistemleri" },
          { id: "d10-t3", title: "TYT Kimya: Periyodik Sistem" },
          { id: "d10-t4", title: "TYT Biyoloji: Karbonhidratlar ve Yağlar" }
        ]
      },
      {
        dayNumber: 11,
        tasks: [
          { id: "d11-t1", title: "Türkçe: Noktalama (Noktalı Virgül, İki Nokta)" },
          { id: "d11-t2", title: "Matematik: Eşitsizlik Soru Çözümü" },
          { id: "d11-t3", title: "TYT Kimya: Kimyasal Türler" },
          { id: "d11-t4", title: "TYT Biyoloji: Proteinler, Vitaminler" }
        ]
      },
      {
        dayNumber: 12,
        tasks: [
          { id: "d12-t1", title: "Türkçe: Noktalama (Diğerleri)" },
          { id: "d12-t2", title: "Matematik: Parabol (Tepe Noktası)" },
          { id: "d12-t3", title: "Kimya: Gazlar (Gaz Yasaları)" },
          { id: "d12-t4", title: "Fizik: Vektörler" }
        ]
      },
      {
        dayNumber: 13,
        tasks: [
          { id: "d13-t1", title: "Türkçe: Noktalama Soru Çözümü" },
          { id: "d13-t2", title: "Matematik: Parabol (Eksenleri Kestiği Noktalar)" },
          { id: "d13-t3", title: "Kimya: İdeal Gaz Denklemi" },
          { id: "d13-t4", title: "Fizik: Kesişen Kuvvetlerin Dengesi" }
        ]
      },
      {
        dayNumber: 14,
        tasks: [
          { id: "d14-t1", title: "Haftalık Genel Tekrar ve Yanlış Analizi" }
        ]
      },
      {
        dayNumber: 15,
        tasks: [
          { id: "d15-t1", title: "Türkçe: Sözcükte Yapı (Kök Bilgisi)" },
          { id: "d15-t2", title: "Matematik: Parabol Denklemi Yazma" },
          { id: "d15-t3", title: "Kimya: Kısmi Basınç ve Gaz Karışımları" },
          { id: "d15-t4", title: "Fizik: Tork (Giriş)" }
        ]
      },
      {
        dayNumber: 16,
        tasks: [
          { id: "d16-t1", title: "Türkçe: Sözcükte Yapı (Yapım Ekleri)" },
          { id: "d16-t2", title: "Matematik: Parabol-Doğru Durumları" },
          { id: "d16-t3", title: "Kimya: Gerçek Gazlar" },
          { id: "d16-t4", title: "Fizik: Tork (Uygulamalar)" }
        ]
      },
      {
        dayNumber: 17,
        tasks: [
          { id: "d17-t1", title: "Türkçe: Sözcükte Yapı (Çekim Ekleri)" },
          { id: "d17-t2", title: "Matematik: Parabolün Max/Min Değeri" },
          { id: "d17-t3", title: "Kimya: Gazlar Soru Çözümü" },
          { id: "d17-t4", title: "Fizik: Kütle ve Ağırlık Merkezi" }
        ]
      },
      {
        dayNumber: 18,
        tasks: [
          { id: "d18-t1", title: "Türkçe: Sözcükte Yapı Soru Çözümü" },
          { id: "d18-t2", title: "Matematik: Parabol Karma Test" },
          { id: "d18-t3", title: "Kimya: Sıvı Çözeltiler (Derişim)" },
          { id: "d18-t4", title: "Fizik: Basit Makineler (Kaldıraç/Makara)" }
        ]
      },
      {
        dayNumber: 19,
        tasks: [
          { id: "d19-t1", title: "Türkçe: Cümlenin Ögeleri (Temel Ögeler)" },
          { id: "d19-t2", title: "Matematik: 1. Aşama Matematik Tekrar Testi" },
          { id: "d19-t3", title: "Kimya: Çözünürlük Kavramı" },
          { id: "d19-t4", title: "Fizik: 1. Aşama Fizik Tekrar Testi" }
        ]
      },
      {
        dayNumber: 20,
        tasks: [
          { id: "d20-t1", title: "1. AŞAMA DEĞERLENDİRME: TYT Türkçe Branş Denemesi" },
          { id: "d20-t2", title: "AYT Matematik Branş Denemesi" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "2. AŞAMA: NET DEPOSU KONULAR",
    days: [
      {
        dayNumber: 21,
        tasks: [
          { id: "d21-t1", title: "Türkçe: Cümlenin Ögeleri (Yardımcı Ögeler)" },
          { id: "d21-t2", title: "Matematik: Logaritma (Üstel Fonksiyon)" },
          { id: "d21-t3", title: "Biyoloji: Sindirim Sistemi (Organlar)" },
          { id: "d21-t4", title: "Kimya: Koligatif Özellikler" }
        ]
      },
      {
        dayNumber: 22,
        tasks: [
          { id: "d22-t1", title: "Türkçe: Cümlenin Ögeleri (Vurgu/Arasöz)" },
          { id: "d22-t2", title: "Matematik: Logaritma Özellikleri-1" },
          { id: "d22-t3", title: "Biyoloji: Sindirim Sistemi (Kimyasal Sindirim)" },
          { id: "d22-t4", title: "Kimya: Çözünürlüğe Etki Eden Faktörler" }
        ]
      },
      {
        dayNumber: 23,
        tasks: [
          { id: "d23-t1", title: "Türkçe: Cümlenin Ögeleri Soru Çözümü" },
          { id: "d23-t2", title: "Matematik: Logaritma Özellikleri-2" },
          { id: "d23-t3", title: "Biyoloji: Sindirim Sistemi Soru Çözümü" },
          { id: "d23-t4", title: "Kimya: Sıvı Çözeltiler Soru Çözümü" }
        ]
      },
      {
        dayNumber: 24,
        tasks: [
          { id: "d24-t1", title: "Türkçe: Sözcük Türleri (İsimler)" },
          { id: "d24-t2", title: "Matematik: Logaritmalı Denklemler" },
          { id: "d24-t3", title: "Biyoloji: Solunum Sistemi (Yapılar)" },
          { id: "d24-t4", title: "Fizik: TYT Madde ve Özellikleri" }
        ]
      },
      {
        dayNumber: 25,
        tasks: [
          { id: "d25-t1", title: "Türkçe: Sözcük Türleri (Sıfatlar)" },
          { id: "d25-t2", title: "Matematik: Logaritmalı Eşitsizlikler" },
          { id: "d25-t3", title: "Biyoloji: Solunum Sistemi (Gaz Taşınması)" },
          { id: "d25-t4", title: "Fizik: TYT Isı ve Sıcaklık" }
        ]
      },
      {
        dayNumber: 26,
        tasks: [
          { id: "d26-t1", title: "Türkçe: Sözcük Türleri (Zamirler)" },
          { id: "d26-t2", title: "Matematik: Logaritma Soru Çözümü" },
          { id: "d26-t3", title: "Biyoloji: Solunum Sistemi Soru Çözümü" },
          { id: "d26-t4", title: "Fizik: TYT Hal Değişimi" }
        ]
      },
      {
        dayNumber: 27,
        tasks: [
          { id: "d27-t1", title: "Haftalık Genel Tekrar" }
        ]
      },
      {
        dayNumber: 28,
        tasks: [
          { id: "d28-t1", title: "Türkçe: Sözcük Türleri (Zarflar)" },
          { id: "d28-t2", title: "Matematik: Diziler (Genel Terim)" },
          { id: "d28-t3", title: "Biyoloji: Dolaşım Sistemi (Kalp/Damarlar)" },
          { id: "d28-t4", title: "Kimya: Kimyasal Tepkimelerde Enerji (Entalpi)" }
        ]
      },
      {
        dayNumber: 29,
        tasks: [
          { id: "d29-t1", title: "Türkçe: Sözcük Türleri (Edat, Bağlaç)" },
          { id: "d29-t2", title: "Matematik: Aritmetik Dizi" },
          { id: "d29-t3", title: "Biyoloji: Dolaşım Sistemi (Kan Yapısı)" },
          { id: "d29-t4", title: "Kimya: Bağ Enerjileri ve Hess Yasası" }
        ]
      },
      {
        dayNumber: 30,
        tasks: [
          { id: "d30-t1", title: "Türkçe: Sözcük Türleri Soru Çözümü" },
          { id: "d30-t2", title: "Matematik: Geometrik Dizi" },
          { id: "d30-t3", title: "Biyoloji: Lenf Dolaşımı ve Bağışıklık" },
          { id: "d30-t4", title: "Kimya: Enerji Soru Çözümü" }
        ]
      },
      {
        dayNumber: 31,
        tasks: [
          { id: "d31-t1", title: "Türkçe: Fiiller (Kip/Kişi)" },
          { id: "d31-t2", title: "Matematik: Diziler Karma Test" },
          { id: "d31-t3", title: "Biyoloji: Dolaşım Sistemi Soru Çözümü" },
          { id: "d31-t4", title: "Fizik: TYT Optik (Aydınlanma/Gölge)" }
        ]
      },
      {
        dayNumber: 32,
        tasks: [
          { id: "d32-t1", title: "Türkçe: Fiiller (Ek Fiil)" },
          { id: "d32-t2", title: "Matematik: Diziler Soru Çözümü (ÖSYM Tarzı)" },
          { id: "d32-t3", title: "Biyoloji: Sinir Sistemi (Nöron)" },
          { id: "d32-t4", title: "Fizik: TYT Optik (Düzlem Ayna)" }
        ]
      },
      {
        dayNumber: 33,
        tasks: [
          { id: "d33-t1", title: "Türkçe: Fiilimsi" },
          { id: "d33-t2", title: "Matematik: Logaritma ve Diziler Karma Tekrar" },
          { id: "d33-t3", title: "Biyoloji: Sinir Sistemi (İmpuls)" },
          { id: "d33-t4", title: "Fizik: TYT Optik (Küresel Aynalar)" }
        ]
      },
      {
        dayNumber: 34,
        tasks: [
          { id: "d34-t1", title: "Haftalık Genel Tekrar" }
        ]
      },
      {
        dayNumber: 35,
        tasks: [
          { id: "d35-t1", title: "Türkçe: Fiil Çatısı (Özne)" },
          { id: "d35-t2", title: "Matematik: Trigonometri (Yönlü Açılar/Birim Çember)" },
          { id: "d35-t3", title: "Biyoloji: Merkezi Sinir Sistemi" },
          { id: "d35-t4", title: "Kimya: Kimyasal Tepkimelerde Hız (Giriş)" }
        ]
      },
      {
        dayNumber: 36,
        tasks: [
          { id: "d36-t1", title: "Türkçe: Fiil Çatısı (Nesne)" },
          { id: "d36-t2", title: "Matematik: Trigonometrik Fonksiyonlar (Sin/Cos)" },
          { id: "d36-t3", title: "Biyoloji: Çevresel Sinir Sistemi" },
          { id: "d36-t4", title: "Kimya: Hız Bağıntısı Yazma" }
        ]
      },
      {
        dayNumber: 37,
        tasks: [
          { id: "d37-t1", title: "Türkçe: Cümle Türleri (Anlam/Yüklem)" },
          { id: "d37-t2", title: "Matematik: Dik Üçgende Trigonometrik Oranlar" },
          { id: "d37-t3", title: "Biyoloji: Endokrin Sistem (Hipofiz/Tiroid)" },
          { id: "d37-t4", title: "Kimya: Hıza Etki Eden Faktörler" }
        ]
      },
      {
        dayNumber: 38,
        tasks: [
          { id: "d38-t1", title: "Türkçe: Cümle Türleri (Yapı)" },
          { id: "d38-t2", title: "Matematik: İndirgeme Formülleri" },
          { id: "d38-t3", title: "Biyoloji: Endokrin Sistem (Pankreas/Böbrek Üstü)" },
          { id: "d38-t4", title: "Kimya: Hız Soru Çözümü" }
        ]
      },
      {
        dayNumber: 39,
        tasks: [
          { id: "d39-t1", title: "Türkçe: Dil Bilgisi Karma Deneme-1" },
          { id: "d39-t2", title: "Matematik: Kosinüs ve Sinüs Teoremleri" },
          { id: "d39-t3", title: "Biyoloji: Endokrin Sistem Soru Çözümü" },
          { id: "d39-t4", title: "Fizik: 2. Aşama Fizik Tekrar Testi" }
        ]
      },
      {
        dayNumber: 40,
        tasks: [
          { id: "d40-t1", title: "2. AŞAMA DEĞERLENDİRME: TYT Türkçe Branş Denemesi" },
          { id: "d40-t2", title: "AYT Fen Branş Denemesi" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "3. AŞAMA: TRİGONOMETRİ, LİMİT VE MODERN FİZİK",
    days: [
      {
        dayNumber: 41,
        tasks: [
          { id: "d41-t1", title: "Türkçe: Dil Bilgisi Karma Deneme-2" },
          { id: "d41-t2", title: "Matematik: Toplam-Fark Formülleri" },
          { id: "d41-t3", title: "Biyoloji: Boşaltım Sistemi (Böbrek)" },
          { id: "d41-t4", title: "Kimya: Kimyasal Dengeye Giriş (Kc)" }
        ]
      },
      {
        dayNumber: 42,
        tasks: [
          { id: "d42-t1", title: "Türkçe: Anlatım Bozuklukları (Yapısal)" },
          { id: "d42-t2", title: "Matematik: Yarım Açı Formülleri" },
          { id: "d42-t3", title: "Biyoloji: Nefronun Yapısı" },
          { id: "d42-t4", title: "Kimya: Denge Kesri (Qc)" }
        ]
      },
      {
        dayNumber: 43,
        tasks: [
          { id: "d43-t1", title: "Türkçe: Anlatım Bozuklukları (Anlamsal)" },
          { id: "d43-t2", title: "Matematik: Trigonometrik Denklemler (Temel)" },
          { id: "d43-t3", title: "Biyoloji: Boşaltım Sistemi Soru Çözümü" },
          { id: "d43-t4", title: "Kimya: Le Chatelier İlkesi" }
        ]
      },
      {
        dayNumber: 44,
        tasks: [
          { id: "d44-t1", title: "Türkçe: TYT Türkçe Denemesi" },
          { id: "d44-t2", title: "Matematik: Trigonometri Karma Çözüm" },
          { id: "d44-t3", title: "Biyoloji: Üreme Sistemi (Erkek/Dişi)" },
          { id: "d44-t4", title: "Fizik: Modern Fizik (Kara Cisim Işıması)" }
        ]
      },
      {
        dayNumber: 45,
        tasks: [
          { id: "d45-t1", title: "Türkçe: TYT Türkçe Yanlış Analizi" },
          { id: "d45-t2", title: "Matematik: Trigonometri Soru Çözümü" },
          { id: "d45-t3", title: "Biyoloji: Menstrual Döngü ve Döllenme" },
          { id: "d45-t4", title: "Fizik: Fotoelektrik Olayı" }
        ]
      },
      {
        dayNumber: 46,
        tasks: [
          { id: "d46-t1", title: "Türkçe: TYT Türkçe Denemesi" },
          { id: "d46-t2", title: "Matematik: Limit Kavramı (Sağ/Sol Yaklaşma)" },
          { id: "d46-t3", title: "Biyoloji: Embriyonik Gelişim" },
          { id: "d46-t4", title: "Fizik: Fotoelektrik Denklemleri" }
        ]
      },
      {
        dayNumber: 47,
        tasks: [
          { id: "d47-t1", title: "Haftalık Genel Tekrar" }
        ]
      },
      {
        dayNumber: 48,
        tasks: [
          { id: "d48-t1", title: "Türkçe: TYT Türkçe Yanlış Analizi" },
          { id: "d48-t2", title: "Matematik: Limitte Özellikler ve Belirsizlikler (0/0)" },
          { id: "d48-t3", title: "Biyoloji: Genden Proteine (Nükleik Asitler)" },
          { id: "d48-t4", title: "Kimya: Asit-Baz Dengesi (pH, pOH)" }
        ]
      },
      {
        dayNumber: 49,
        tasks: [
          { id: "d49-t1", title: "Türkçe: TYT Türkçe Denemesi" },
          { id: "d49-t2", title: "Matematik: Süreklilik Kavramı" },
          { id: "d49-t3", title: "Biyoloji: DNA Eşlenmesi (Replikasyon)" },
          { id: "d49-t4", title: "Kimya: Kuvvetli ve Zayıf Asit-Bazlar" }
        ]
      },
      {
        dayNumber: 50,
        tasks: [
          { id: "d50-t1", title: "Türkçe: TYT Türkçe Yanlış Analizi" },
          { id: "d50-t2", title: "Matematik: Limit ve Süreklilik Soru Çözümü" },
          { id: "d50-t3", title: "Biyoloji: Protein Sentezi (Transkripsiyon/Translasyon)" },
          { id: "d50-t4", title: "Kimya: Tampon Çözeltiler ve Hidroliz" }
        ]
      },
      {
        dayNumber: 51,
        tasks: [
          { id: "d51-t1", title: "TYT Fen: Branş Denemesi-1" },
          { id: "d51-t2", title: "Matematik: Türeve Giriş (Sadece Kurallar)" },
          { id: "d51-t3", title: "Biyoloji: Genden Proteine Soru Çözümü" },
          { id: "d51-t4", title: "Fizik: Compton Saçılması ve De Broglie" }
        ]
      },
      {
        dayNumber: 52,
        tasks: [
          { id: "d52-t1", title: "TYT Fen: Yanlış Analizi" },
          { id: "d52-t2", title: "Matematik: Türev Alma Kuralları Pratik" },
          { id: "d52-t3", title: "Biyoloji: Fotosentez (Kloroplast/Işığa Bağımlı Evre)" },
          { id: "d52-t4", title: "Fizik: Modern Fizik Soru Çözümü" }
        ]
      },
      {
        dayNumber: 53,
        tasks: [
          { id: "d53-t1", title: "TYT Fen: Branş Denemesi-2" },
          { id: "d53-t2", title: "Matematik: Türev Soru Çözümü" },
          { id: "d53-t3", title: "Biyoloji: Fotosentez (Işıktan Bağımsız Evre)" },
          { id: "d53-t4", title: "Fizik: Atom Modelleri (Bohr)" }
        ]
      },
      {
        dayNumber: 54,
        tasks: [
          { id: "d54-t1", title: "Haftalık Genel Tekrar" }
        ]
      },
      {
        dayNumber: 55,
        tasks: [
          { id: "d55-t1", title: "Türkçe: TYT Türkçe Denemesi" },
          { id: "d55-t2", title: "Matematik: Logaritma/Dizi Tekrar Testi" },
          { id: "d55-t3", title: "Biyoloji: Hücresel Solunum (Glikoliz/Krebs)" },
          { id: "d55-t4", title: "Kimya: Karbon Kimyasına Giriş" }
        ]
      },
      {
        dayNumber: 56,
        tasks: [
          { id: "d56-t1", title: "Türkçe: TYT Türkçe Yanlış Analizi" },
          { id: "d56-t2", title: "Matematik: AYT Matematik Branş Denemesi-1" },
          { id: "d56-t3", title: "Biyoloji: Hücresel Solunum (ETS) ve Fermantasyon" },
          { id: "d56-t4", title: "Kimya: Karbonun Allotropları ve Hibritleşme" }
        ]
      },
      {
        dayNumber: 57,
        tasks: [
          { id: "d57-t1", title: "TYT Fen: Branş Denemesi-3" },
          { id: "d57-t2", title: "Matematik: AYT Mat Yanlış Analizi" },
          { id: "d57-t3", title: "Biyoloji: Fotosentez ve Solunum Karşılaştırma" },
          { id: "d57-t4", title: "Kimya: Molekül Geometrileri (VSEPR)" }
        ]
      },
      {
        dayNumber: 58,
        tasks: [
          { id: "d58-t1", title: "Türkçe: TYT Türkçe Denemesi" },
          { id: "d58-t2", title: "AYT Fen: Biyoloji Branş Denemesi-1" },
          { id: "d58-t3", title: "Fizik: Radyoaktivite ve Büyük Patlama" },
          { id: "d58-t4", title: "Kimya: Organik Kimyaya Giriş Soru Çözümü" }
        ]
      },
      {
        dayNumber: 59,
        tasks: [
          { id: "d59-t1", title: "Tüm gün AYT Matematik Çıkmış Sorular (Son 3 yılın sadece işlenen konuları)" }
        ]
      },
      {
        dayNumber: 60,
        tasks: [
          { id: "d60-t1", title: "3. AŞAMA DEĞERLENDİRME: Tam Kapsamlı TYT Denemesi" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "4. AŞAMA: SİMÜLASYON VE HATA AVCILIĞI",
    days: [
      {
        dayNumber: 61,
        tasks: [
          { id: "d61-t1", title: "TYT Türkçe Denemesi + AYT Matematik Branş Denemesi" },
          { id: "d61-t2", title: "Yanlış analizi" }
        ]
      },
      {
        dayNumber: 62,
        tasks: [
          { id: "d62-t1", title: "TYT Fen Denemesi + AYT Kimya Branş Denemesi" },
          { id: "d62-t2", title: "Yanlış analizi" }
        ]
      },
      {
        dayNumber: 63,
        tasks: [
          { id: "d63-t1", title: "TYT Türkçe Denemesi + AYT Biyoloji Branş Denemesi" },
          { id: "d63-t2", title: "Yanlış analizi" }
        ]
      },
      {
        dayNumber: 64,
        tasks: [
          { id: "d64-t1", title: "Tam Kapsamlı TYT Denemesi (Süre tutarak, saat 10:15'te)" }
        ]
      },
      {
        dayNumber: 65,
        tasks: [
          { id: "d65-t1", title: "AYT Matematik Çıkmış Sorular (Kalan yıllar)" }
        ]
      },
      {
        dayNumber: 66,
        tasks: [
          { id: "d66-t1", title: "AYT Fizik (İşlenen konular) Branş Denemesi" },
          { id: "d66-t2", title: "AYT Kimya Branş Denemesi" }
        ]
      },
      {
        dayNumber: 67,
        tasks: [
          { id: "d67-t1", title: "TYT Türkçe Denemesi" },
          { id: "d67-t2", title: "AYT Matematik Branş Denemesi" }
        ]
      },
      {
        dayNumber: 68,
        tasks: [
          { id: "d68-t1", title: "TYT Fen Çıkmış Sorular (Son 5 yıl)" }
        ]
      },
      {
        dayNumber: 69,
        tasks: [
          { id: "d69-t1", title: "AYT Biyoloji MEB Kitabı Okuması (Sistemler ve Enerji Dönüşümleri)" },
          { id: "d69-t2", title: "2 Branş Denemesi" }
        ]
      },
      {
        dayNumber: 70,
        tasks: [
          { id: "d70-t1", title: "Tam Kapsamlı AYT Denemesi (Öğrenilmeyen konuları boş bırak)" }
        ]
      },
      {
        dayNumber: 71,
        tasks: [
          { id: "d71-t1", title: "Sabah TYT Denemesi, Öğleden Sonra AYT Matematik Branş Denemesi" },
          { id: "d71-t2", title: "Akşam Yanlış Analizi" }
        ]
      },
      {
        dayNumber: 72,
        tasks: [
          { id: "d72-t1", title: "Sabah TYT Denemesi, Öğleden Sonra AYT Kimya Branş Denemesi" },
          { id: "d72-t2", title: "Akşam Yanlış Analizi" }
        ]
      },
      {
        dayNumber: 73,
        tasks: [
          { id: "d73-t1", title: "Sabah TYT Denemesi, Öğleden Sonra AYT Biyoloji Branş Denemesi" },
          { id: "d73-t2", title: "Akşam Yanlış Analizi" }
        ]
      },
      {
        dayNumber: 74,
        tasks: [
          { id: "d74-t1", title: "Sabah TYT Denemesi, Öğleden Sonra AYT Matematik Branş Denemesi" },
          { id: "d74-t2", title: "Akşam Yanlış Analizi" }
        ]
      },
      {
        dayNumber: 75,
        tasks: [
          { id: "d75-t1", title: "Sabah TYT Denemesi" },
          { id: "d75-t2", title: "Öğleden Sonra Karışık AYT Fen Branş Denemeleri" }
        ]
      },
      {
        dayNumber: 76,
        tasks: [
          { id: "d76-t1", title: "2023 Çıkmış Sınav Simülasyonu (TYT/AYT birebir saatinde)" }
        ]
      },
      {
        dayNumber: 77,
        tasks: [
          { id: "d77-t1", title: "2022 Çıkmış Sınav Simülasyonu (TYT/AYT birebir saatinde)" }
        ]
      },
      {
        dayNumber: 78,
        tasks: [
          { id: "d78-t1", title: "2021 Çıkmış Sınav Simülasyonu (TYT/AYT birebir saatinde)" }
        ]
      },
      {
        dayNumber: 79,
        tasks: [
          { id: "d79-t1", title: "Formül ve not okumaları" },
          { id: "d79-t2", title: "TYT/AYT çıkmış soru gözden geçirmeleri" }
        ]
      },
      {
        dayNumber: 80,
        tasks: [
          { id: "d80-t1", title: "Dinlenme, zihin boşaltma ve sınava hazırlık" },
          { id: "d80-t2", title: "Asla yeni bir konuya bakılmayacak" }
        ]
      }
    ]
  }
];
