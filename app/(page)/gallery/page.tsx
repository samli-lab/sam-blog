'use client';

import { useState } from 'react';
import LazyImage from '@/app/components/LazyImage';

// 模拟照片数据
const photos = [
  { id: 1, src: 'https://picsum.photos/seed/101/800/600', title: '山川湖海', category: '风景' },
  { id: 2, src: 'https://picsum.photos/seed/102/800/600', title: '城市角落', category: '风景' },
  { id: 3, src: 'https://picsum.photos/seed/103/800/600', title: '人像摄影', category: '人物' },
  { id: 4, src: 'https://picsum.photos/seed/104/800/600', title: '日落时分', category: '风景' },
  { id: 5, src: 'https://picsum.photos/seed/105/800/600', title: '生活碎片', category: '生活' },
  { id: 6, src: 'https://picsum.photos/seed/106/800/600', title: '街头抓拍', category: '人物' },
  { id: 7, src: 'https://picsum.photos/seed/107/800/600', title: '咖啡时光', category: '生活' },
  { id: 8, src: 'https://picsum.photos/seed/108/800/600', title: '森林秘境', category: '风景' },
  { id: 9, src: 'https://picsum.photos/seed/109/800/600', title: '书桌一角', category: '生活' },
];

const categories = ['全部', '风景', '人物', '生活'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === '全部'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Header */}
      <div className="card p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">照片墙</h1>
          <p className="text-gray-500 dark:text-gray-400">定格美好瞬间 · 记录生活点滴</p>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-tr from-green-100 to-transparent dark:from-green-900/20 rounded-full blur-3xl -ml-16 -mt-16 z-0 pointer-events-none"></div>
      </div>

      {/* Filter */}
      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
              selectedCategory === category
                ? 'bg-[#49b1f5] text-white shadow-md transform scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.id)}
            className="break-inside-avoid cursor-pointer group"
          >
            <div className="card overflow-hidden relative">
              <LazyImage
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#49b1f5] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={photos.find(p => p.id === selectedPhoto)?.src}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-0 w-full text-center text-white">
              <h3 className="text-2xl font-bold mb-2 text-shadow">
                {photos.find(p => p.id === selectedPhoto)?.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

