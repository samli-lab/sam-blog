import Link from 'next/link';
import type { Metadata } from 'next';

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
  },
  {
    id: 2,
    title: '前端性能优化实践',
    excerpt: '分享一些前端性能优化的实用技巧和最佳实践，帮助你构建更快的 Web 应用...',
    date: '2024-01-18',
    category: '技术',
    readTime: '8 分钟',
  },
  {
    id: 3,
    title: '设计系统的构建思考',
    excerpt: '如何构建一个可扩展、易维护的设计系统，从组件库到设计规范...',
    date: '2024-01-15',
    category: '设计',
    readTime: '6 分钟',
  },
  {
    id: 4,
    title: '2024 年的技术趋势',
    excerpt: '回顾 2023 年，展望 2024 年的技术发展趋势和值得关注的新技术...',
    date: '2024-01-10',
    category: '思考',
    readTime: '10 分钟',
  },
  {
    id: 5,
    title: '如何保持学习动力',
    excerpt: '分享一些保持学习动力和持续成长的方法和心得...',
    date: '2024-01-05',
    category: '生活',
    readTime: '5 分钟',
  },
  {
    id: 6,
    title: 'TypeScript 进阶技巧',
    excerpt: '深入理解 TypeScript 的高级特性，包括泛型、条件类型、映射类型等...',
    date: '2024-01-01',
    category: '技术',
    readTime: '12 分钟',
  },
];

const categories = ['全部', '技术', '设计', '思考', '生活'];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          文章列表
        </h1>
        <p className="text-xl text-gray-600">记录思考，分享知识</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              category === '全部'
                ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/30'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
          >
            <div className="h-48 bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                阅读更多
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
          上一页
        </button>
        <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-md shadow-blue-500/30">
          1
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
          下一页
        </button>
      </div>
    </div>
  );
}

