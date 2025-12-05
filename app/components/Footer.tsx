export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 mt-12 py-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#49b1f5] to-[#00c4b6] bg-clip-text text-transparent inline-block">
              Sam's Blog
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              记录生活 · 分享思考 · 探索世界
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="/blog" className="text-gray-500 hover:text-[#49b1f5] transition-colors text-sm">文章</a>
            <a href="/timeline" className="text-gray-500 hover:text-[#49b1f5] transition-colors text-sm">时光</a>
            <a href="/gallery" className="text-gray-500 hover:text-[#49b1f5] transition-colors text-sm">照片</a>
            <a href="/guestbook" className="text-gray-500 hover:text-[#49b1f5] transition-colors text-sm">留言</a>
          </div>

          <div className="text-sm text-gray-400 dark:text-gray-500">
            <p>© {currentYear} Sam. All rights reserved.</p>
            <p className="mt-1">
              Powered by <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#49b1f5] transition-colors">Next.js</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
