'use client';

import { useState } from 'react';

// 模拟留言数据
const initialMessages = [
  {
    id: 1,
    name: '张三',
    message: '很棒的个人博客！设计简洁大方，内容也很丰富。Butterfly 主题真的很漂亮！',
    date: '2024-01-20 14:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  },
  {
    id: 2,
    name: '李四',
    message: '期待更多技术分享，特别是关于前端开发的内容。',
    date: '2024-01-19 10:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
  },
  {
    id: 3,
    name: '王五',
    message: '照片墙很漂亮，时光记录也很有意思！',
    date: '2024-01-18 16:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe',
  },
];

export default function GuestbookPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Header */}
      <div className="card p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">留言板</h1>
          <p className="text-gray-500 dark:text-gray-400">留下你的足迹 · 分享你的想法</p>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl from-yellow-100 to-transparent dark:from-yellow-900/20 rounded-full blur-3xl -mr-16 -mb-16 z-0 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-[#49b1f5]">✍️</span> 写留言
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  昵称
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#49b1f5] focus:border-transparent transition-all outline-none"
                  placeholder="请输入你的名字"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  留言内容
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#49b1f5] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="写下你想说的话..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#49b1f5] hover:bg-[#2ba1f3] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                发送留言
              </button>
            </form>
          </div>
        </div>

        {/* Messages List */}
        <div className="lg:col-span-2 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="card p-6 hover:border-l-4 hover:border-[#49b1f5] transition-all duration-300"
            >
              <div className="flex gap-4">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 p-1"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{msg.name}</h3>
                    <span className="text-xs text-gray-400">{msg.date}</span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg rounded-tl-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{msg.message}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

