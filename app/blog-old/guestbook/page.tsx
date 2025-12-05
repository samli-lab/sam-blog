'use client';

import { useState } from 'react';

// 模拟留言数据
const initialMessages = [
  {
    id: 1,
    name: '张三',
    message: '很棒的个人博客！设计简洁大方，内容也很丰富。',
    date: '2024-01-20 14:30',
    avatar: '👤',
  },
  {
    id: 2,
    name: '李四',
    message: '期待更多技术分享，特别是关于前端开发的内容。',
    date: '2024-01-19 10:15',
    avatar: '👤',
  },
  {
    id: 3,
    name: '王五',
    message: '照片墙很漂亮，时光记录也很有意思！',
    date: '2024-01-18 16:45',
    avatar: '👤',
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
      avatar: '👤',
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          留言板
        </h1>
        <p className="text-xl text-gray-600">留下你的足迹和想法</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              你的名字
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="请输入你的名字"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              留言内容
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="写下你想说的话..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02]"
          >
            提交留言
          </button>
        </form>
      </div>

      {/* Messages */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">所有留言 ({messages.length})</h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{msg.name}</h3>
                  <span className="text-sm text-gray-500">{msg.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

