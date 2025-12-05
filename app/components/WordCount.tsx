'use client';

interface WordCountProps {
  content: string;
}

export default function WordCount({ content }: WordCountProps) {
  // 简单的字数统计逻辑
  const countWords = (text: string) => {
    const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const en = (text.match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04ff]+|[\u00e0-\u00fc]+/g) || []).length;
    return cn + en;
  };

  const words = countWords(content);
  const readTime = Math.ceil(words / 400); // 假设阅读速度为每分钟 400 字

  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <span className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {words} 字
      </span>
      <span className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {readTime} 分钟
      </span>
    </div>
  );
}

