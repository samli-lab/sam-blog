import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首页',
  description: '欢迎来到 Sam 的个人博客，这里记录生活、分享思考、探索世界',
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
            欢迎来到我的博客
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          记录生活，分享思考，探索世界
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
          >
            阅读文章
          </Link>
          <Link
            href="/timeline"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            时光记录
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        <Link
          href="/blog"
          className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
        >
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">文章</h3>
          <p className="text-gray-600 text-sm">阅读我的最新文章和思考</p>
        </Link>

        <Link
          href="/timeline"
          className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2"
        >
          <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">时光</h3>
          <p className="text-gray-600 text-sm">记录生活中的重要时刻</p>
        </Link>

        <Link
          href="/gallery"
          className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2"
        >
          <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">照片</h3>
          <p className="text-gray-600 text-sm">分享美好的瞬间</p>
        </Link>

        <Link
          href="/guestbook"
          className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
        >
          <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">留言</h3>
          <p className="text-gray-600 text-sm">留下你的足迹和想法</p>
        </Link>
      </section>

      {/* Recent Posts Preview */}
      <section className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">最新文章</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            查看更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/blog/${i}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-linear-to-br from-blue-400 via-cyan-400 to-teal-400"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2024年1月{15 + i}日</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  示例文章标题 {i}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  这是一篇示例文章的内容预览，展示了文章的基本信息和摘要...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

