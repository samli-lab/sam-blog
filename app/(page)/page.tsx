import Link from 'next/link';
import type { Metadata } from 'next';
import LazyImage from '@/app/components/LazyImage';

export const metadata: Metadata = {
  title: '首页',
  description: '欢迎来到 Sam 的个人博客，这里记录生活、分享思考、探索世界',
};

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[60vh] -mt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#49b1f5] to-[#fff] opacity-10 dark:opacity-5 z-0"></div>
        <div className="text-center z-10 space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#49b1f5] to-[#00c4b6] animate-gradient mb-4">
            Sam's Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
            记录生活 · 分享思考 · 探索世界
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/blog"
              className="px-8 py-3 bg-[#49b1f5] hover:bg-[#2ba1f3] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              开始阅读
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {[
          { href: '/blog', title: '文章', desc: '技术 · 思考 · 随笔', icon: '📝', color: 'from-blue-400 to-cyan-400' },
          { href: '/timeline', title: '时光', desc: '记录重要时刻', icon: '📅', color: 'from-cyan-400 to-teal-400' },
          { href: '/gallery', title: '照片', desc: '定格美好瞬间', icon: '📷', color: 'from-teal-400 to-green-400' },
          { href: '/guestbook', title: '留言', desc: '期待你的声音', icon: '💬', color: 'from-green-400 to-emerald-400' },
        ].map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="card group p-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${item.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
            <div className="relative z-10">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Recent Posts */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-[#49b1f5]">📚</span> 最新文章
          </h2>
          <Link href="/blog" className="text-gray-500 hover:text-[#49b1f5] transition-colors flex items-center gap-1 text-sm">
            查看更多
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/blog/post-${i}`}
              className="card group overflow-hidden block"
            >
              <div className="h-48 overflow-hidden relative">
                <LazyImage
                  src={`https://picsum.photos/seed/${i + 10}/800/600`}
                  alt={`文章封面 ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#49b1f5] text-white text-xs font-bold rounded-full shadow-md">
                    技术
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2024-01-{15 + i}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5 min
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-1 group-hover:text-[#49b1f5] transition-colors">
                  Next.js 16 新特性探索与实践指南 {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                  深入探讨 Next.js 16 带来的革命性变化，包括 Server Actions 的增强、Partial Prerendering 的应用以及性能优化的最佳实践...
                </p>
                <div className="flex items-center text-[#49b1f5] text-sm font-medium group-hover:translate-x-1 transition-transform">
                  阅读全文
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

