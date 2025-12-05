import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '时光记录',
  description: '记录生活中的重要时刻和美好回忆',
};

// 模拟时光记录数据
const timelineEvents = [
  {
    id: 1,
    date: '2024-01-20',
    title: '完成博客网站搭建',
    description: '使用 Next.js 16 搭建了个人博客，包含文章、时光记录、照片墙和留言板等功能。',
    type: 'achievement',
    icon: '🎉',
  },
  {
    id: 2,
    date: '2024-01-15',
    title: '学习新的前端技术',
    description: '深入学习了 React Server Components 和 Next.js 的最新特性，收获颇丰。',
    type: 'learning',
    icon: '📚',
  },
  {
    id: 3,
    date: '2024-01-10',
    title: '参加技术分享会',
    description: '参加了一场关于前端性能优化的技术分享会，学到了很多实用的优化技巧。',
    type: 'event',
    icon: '🎤',
  },
  {
    id: 4,
    date: '2024-01-05',
    title: '新年计划制定',
    description: '制定了 2024 年的学习和工作计划，希望在新的一年里能够持续成长。',
    type: 'planning',
    icon: '📅',
  },
  {
    id: 5,
    date: '2023-12-30',
    title: '年度总结',
    description: '回顾了 2023 年的收获和成长，感谢所有帮助过我的人。',
    type: 'reflection',
    icon: '✨',
  },
];

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    achievement: 'bg-linear-to-br from-green-500 to-emerald-400',
    learning: 'bg-linear-to-br from-blue-500 to-cyan-400',
    event: 'bg-linear-to-br from-orange-500 to-amber-400',
    planning: 'bg-linear-to-br from-teal-500 to-cyan-400',
    reflection: 'bg-linear-to-br from-indigo-500 to-blue-400',
  };
  return colors[type] || 'bg-linear-to-br from-gray-500 to-gray-400';
};

export default function TimelinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          时光记录
        </h1>
        <p className="text-xl text-gray-600">记录生活中的重要时刻</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400 via-cyan-400 to-teal-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative flex items-start gap-6">
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 ${getTypeColor(event.type)} rounded-full flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20 flex-shrink-0`}>
                {event.icon}
              </div>

              {/* Content */}
              <div className="flex-grow bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-gray-500">{event.date}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
          加载更多
        </button>
      </div>
    </div>
  );
}

