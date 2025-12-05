import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '时光记录',
  description: '记录生活中的重要时刻和美好回忆',
};

const timelineEvents = [
  {
    id: 1,
    date: '2024-01-20',
    title: '完成博客网站搭建',
    description: '使用 Next.js 16 搭建了个人博客，包含文章、时光记录、照片墙和留言板等功能。',
    type: 'achievement',
    icon: '🎉',
    color: '#49b1f5',
  },
  {
    id: 2,
    date: '2024-01-15',
    title: '学习新的前端技术',
    description: '深入学习了 React Server Components 和 Next.js 的最新特性，收获颇丰。',
    type: 'learning',
    icon: '📚',
    color: '#ff7242',
  },
  {
    id: 3,
    date: '2024-01-10',
    title: '参加技术分享会',
    description: '参加了一场关于前端性能优化的技术分享会，学到了很多实用的优化技巧。',
    type: 'event',
    icon: '🎤',
    color: '#34d399',
  },
  {
    id: 4,
    date: '2024-01-05',
    title: '新年计划制定',
    description: '制定了 2024 年的学习和工作计划，希望在新的一年里能够持续成长。',
    type: 'planning',
    icon: '📅',
    color: '#f472b6',
  },
  {
    id: 5,
    date: '2023-12-30',
    title: '年度总结',
    description: '回顾了 2023 年的收获和成长，感谢所有帮助过我的人。',
    type: 'reflection',
    icon: '✨',
    color: '#a78bfa',
  },
];

export default function TimelinePage() {
  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Header */}
      <div className="card p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">时光记录</h1>
          <p className="text-gray-500 dark:text-gray-400">记录生活 · 见证成长</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-purple-100 to-transparent dark:from-purple-900/20 rounded-full blur-3xl -mr-16 -mt-16 z-0 pointer-events-none"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="relative border-l-2 border-[#49b1f5]/30 ml-4 space-y-12">
          {timelineEvents.map((event) => (
            <div key={event.id} className="relative pl-8 group">
              {/* Dot */}
              <div 
                className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 transition-all duration-300 group-hover:scale-125 shadow-sm"
                style={{ backgroundColor: event.color }}
              />
              
              {/* Content Card */}
              <div className="card p-6 relative hover:translate-x-2 transition-transform duration-300">
                {/* Arrow */}
                <div className="absolute left-0 top-4 -ml-[9px] w-4 h-4 bg-white dark:bg-[#1f2937] transform rotate-45 border-l border-b border-gray-100 dark:border-gray-800/50" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white shadow-md"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.icon}
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-13">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-[#49b1f5] text-[#49b1f5] rounded-full font-bold hover:bg-[#49b1f5] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            加载更多回忆...
          </button>
        </div>
      </div>
    </div>
  );
}

