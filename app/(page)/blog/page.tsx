import Link from 'next/link';
import type { Metadata } from 'next';
import LazyImage from '@/app/components/LazyImage';

export const metadata: Metadata = {
  title: '文章列表',
  description: '浏览所有文章，阅读我的思考和分享',
};

// 模拟文章数据
const posts = [
  {
    id: 1,
    title: 'Next.js 16 新特性探索',
    excerpt: '深入探讨 Next.js 16 带来的新功能和改进，包括 React Server Components、Turbopack 等...',
    date: '2024-01-20',
    category: '技术',
    readTime: '5 分钟',
    cover: 'https://picsum.photos/seed/1/800/600'
  },
  {
    id: 2,
    title: '前端性能优化实践',
    excerpt: '分享一些前端性能优化的实用技巧和最佳实践，帮助你构建更快的 Web 应用...',
    date: '2024-01-18',
    category: '技术',
    readTime: '8 分钟',
    cover: 'https://picsum.photos/seed/2/800/600'
  },
  {
    id: 3,
    title: '设计系统的构建思考',
    excerpt: '如何构建一个可扩展、易维护的设计系统，从组件库到设计规范...',
    date: '2024-01-15',
    category: '设计',
    readTime: '6 分钟',
    cover: 'https://picsum.photos/seed/3/800/600'
  },
  {
    id: 4,
    title: '2024 年的技术趋势',
    excerpt: '回顾 2023 年，展望 2024 年的技术发展趋势和值得关注的新技术...',
    date: '2024-01-10',
    category: '思考',
    readTime: '10 分钟',
    cover: 'https://picsum.photos/seed/4/800/600'
  },
  {
    id: 5,
    title: '如何保持学习动力',
    excerpt: '分享一些保持学习动力和持续成长的方法和心得...',
    date: '2024-01-05',
    category: '生活',
    readTime: '5 分钟',
    cover: 'https://picsum.photos/seed/5/800/600'
  },
  {
    id: 6,
    title: 'TypeScript 进阶技巧',
    excerpt: '深入理解 TypeScript 的高级特性，包括泛型、条件类型、映射类型等...',
    date: '2024-01-01',
    category: '技术',
    readTime: '12 分钟',
    cover: 'https://picsum.photos/seed/6/800/600'
  },
];

const categories = ['全部', '技术', '设计', '思考', '生活'];

export default function BlogPage() {
  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Header */}
      <div className="card p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">文章列表</h1>
          <p className="text-gray-500 dark:text-gray-400">记录思考 · 分享知识 · 沉淀价值</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-100 to-transparent dark:from-blue-900/20 rounded-full blur-3xl -mr-16 -mt-16 z-0 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="card p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-[#49b1f5]">📂</span> 分类
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-left transition-all duration-200 flex justify-between items-center group ${
                    category === '全部'
                      ? 'bg-[#49b1f5] text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    category === '全部' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-[#49b1f5] group-hover:text-white transition-colors'
                  }`}>
                    {category === '全部' ? posts.length : posts.filter(p => p.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="card group flex flex-col md:flex-row overflow-hidden hover:scale-[1.01] transition-all duration-300"
            >
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                <LazyImage
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-[#49b1f5] font-medium">{post.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#49b1f5] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <span className="text-xs text-gray-400">{post.readTime} 阅读</span>
                  <span className="text-[#49b1f5] text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center">
                    阅读全文
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-500 hover:bg-[#49b1f5] hover:text-white transition-all disabled:opacity-50" disabled>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#49b1f5] text-white shadow-md flex items-center justify-center font-medium">1</button>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-500 hover:bg-[#49b1f5] hover:text-white transition-all">2</button>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-500 hover:bg-[#49b1f5] hover:text-white transition-all">3</button>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-500 hover:bg-[#49b1f5] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

