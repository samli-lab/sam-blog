import Link from 'next/link';
import type { Metadata } from 'next';
import MarkdownContent from '@/app/components/MarkdownContent';

// 模拟从后端获取文章数据
async function getPost(slug: string) {
  // 这里应该调用你的后端 API
  // const res = await fetch(`your-api-url/posts/${slug}`);
  // return res.json();
  
  // 模拟数据
  return {
    id: slug,
    title: 'Next.js 16 新特性探索',
    date: '2024-01-20',
    category: '技术',
    readTime: '5 分钟',
    content: `# Next.js 16 新特性探索

Next.js 16 带来了许多令人兴奋的新功能和改进。本文将深入探讨这些新特性，帮助你更好地理解和使用 Next.js 16。

## React Server Components

React Server Components 是 Next.js 16 的核心特性之一。它允许你在服务器端渲染组件，减少客户端 JavaScript 的打包体积。

\`\`\`tsx
// app/components/ServerComponent.tsx
export default async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return (
    <div>
      <h1>{json.title}</h1>
      <p>{json.description}</p>
    </div>
  );
}
\`\`\`

## Turbopack

Turbopack 是 Next.js 的新打包工具，比 Webpack 快得多。

### 性能对比

- **开发模式**: 比 Webpack 快 700 倍
- **生产构建**: 比 Webpack 快 10 倍

## 其他改进

1. **改进的路由系统**
2. **更好的 TypeScript 支持**
3. **优化的图片组件**

> 提示：升级到 Next.js 16 时，请确保所有依赖都是兼容的。

## 总结

Next.js 16 为开发者提供了更好的开发体验和性能。建议尽快升级你的项目！

---

*本文发布于 2024年1月20日*
`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: `阅读 ${post.title} - ${post.category} 分类文章`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 返回按钮 */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
      >
        <svg 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回文章列表
      </Link>

      {/* 文章头部 */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time dateTime={post.date} className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </time>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>
      </header>

      {/* 文章内容 */}
      <div className="prose prose-lg prose-slate max-w-none">
        <MarkdownContent content={post.content} />
      </div>

      {/* 文章底部 */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回文章列表
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}

