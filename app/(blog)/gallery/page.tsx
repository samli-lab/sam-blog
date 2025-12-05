'use client';

import { useState } from 'react';

// 模拟照片数据
const photos = [
  { id: 1, src: '/api/placeholder/400/300', title: '风景照 1', category: '风景' },
  { id: 2, src: '/api/placeholder/400/300', title: '风景照 2', category: '风景' },
  { id: 3, src: '/api/placeholder/400/300', title: '人物照 1', category: '人物' },
  { id: 4, src: '/api/placeholder/400/300', title: '风景照 3', category: '风景' },
  { id: 5, src: '/api/placeholder/400/300', title: '生活照 1', category: '生活' },
  { id: 6, src: '/api/placeholder/400/300', title: '人物照 2', category: '人物' },
  { id: 7, src: '/api/placeholder/400/300', title: '生活照 2', category: '生活' },
  { id: 8, src: '/api/placeholder/400/300', title: '风景照 4', category: '风景' },
  { id: 9, src: '/api/placeholder/400/300', title: '生活照 3', category: '生活' },
];

const categories = ['全部', '风景', '人物', '生活'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === '全部'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          照片墙
        </h1>
        <p className="text-xl text-gray-600">分享美好的瞬间</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo.id)}
            className="group relative aspect-[4/3] bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                <span className="text-sm text-white/80">{photo.category}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {photos.find(p => p.id === selectedPhoto)?.title}
              </h2>
              <p className="text-gray-600">
                这是一张美丽的照片，记录了生活中的美好瞬间。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

