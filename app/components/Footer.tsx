export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-white to-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              Sam's Blog
            </h3>
            <p className="text-gray-600 text-sm">
              记录生活，分享思考，探索世界
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  文章列表
                </a>
              </li>
              <li>
                <a href="/timeline" className="text-gray-600 hover:text-blue-600 transition-colors">
                  时光记录
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">
                  照片墙
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">联系我</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/guestbook" className="text-gray-600 hover:text-blue-600 transition-colors">
                  留言板
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {currentYear} Sam's Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

