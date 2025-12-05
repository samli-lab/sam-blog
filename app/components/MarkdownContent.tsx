'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // 标题样式 - 优雅的层级和间距
        h1: ({ node, ...props }: any) => (
          <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-gray-200 leading-tight" {...props} />
        ),
        h2: ({ node, ...props }: any) => (
          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-5 pb-2 border-b border-gray-100 leading-tight" {...props} />
        ),
        h3: ({ node, ...props }: any) => (
          <h3 className="text-2xl font-semibold text-gray-900 mt-7 mb-4 leading-tight" {...props} />
        ),
        h4: ({ node, ...props }: any) => (
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight" {...props} />
        ),
        h5: ({ node, ...props }: any) => (
          <h5 className="text-lg font-semibold text-gray-900 mt-5 mb-2 leading-tight" {...props} />
        ),
        h6: ({ node, ...props }: any) => (
          <h6 className="text-base font-semibold text-gray-800 mt-4 mb-2 leading-tight" {...props} />
        ),
        
        // 段落样式 - 优化的行高和字体大小
        p: ({ node, ...props }: any) => (
          <p className="text-gray-700 leading-relaxed mb-5 text-lg" {...props} />
        ),
        
        // 列表样式 - 清晰的缩进和间距
        ul: ({ node, ...props }: any) => (
          <ul className="list-disc list-outside mb-5 space-y-2 text-gray-700 text-lg ml-6" {...props} />
        ),
        ol: ({ node, ...props }: any) => (
          <ol className="list-decimal list-outside mb-5 space-y-2 text-gray-700 text-lg ml-6" {...props} />
        ),
        li: ({ node, ...props }: any) => (
          <li className="leading-relaxed pl-2" {...props} />
        ),
        
        // 链接样式 - 清晰的视觉反馈
        a: ({ node, ...props }: any) => (
          <a 
            className="text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors font-medium" 
            target="_blank"
            rel="noopener noreferrer"
            {...props} 
          />
        ),
        
        // 引用样式 - 优雅的左侧边框和背景
        blockquote: ({ node, ...props }: any) => (
          <blockquote 
            className="border-l-4 border-blue-500 pl-6 py-3 my-6 bg-blue-50/50 italic text-gray-700 rounded-r-lg" 
            {...props} 
          />
        ),
        
        // 代码块样式 - 语法高亮和美观的容器
        code: ({ node, inline, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          
          if (!inline && language) {
            return (
              <div className="my-6">
                <SyntaxHighlighter
                  language={language}
                  style={oneLight}
                  PreTag="div"
                  className="rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  customStyle={{
                    padding: '1.5rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    fontFamily: 'var(--font-geist-mono), "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          }
          
          return (
            <code 
              className="px-2 py-1 bg-gray-100 text-blue-600 rounded text-sm font-mono before:content-[''] after:content-['']" 
              {...props}
            >
              {children}
            </code>
          );
        },
        
        // 表格样式 - 清晰的边框和间距
        table: ({ node, ...props }: any) => (
          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full border-collapse" {...props} />
          </div>
        ),
        thead: ({ node, ...props }: any) => (
          <thead className="bg-gray-50" {...props} />
        ),
        th: ({ node, ...props }: any) => (
          <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900 text-sm" {...props} />
        ),
        td: ({ node, ...props }: any) => (
          <td className="border-b border-gray-100 px-4 py-3 text-gray-700 text-sm" {...props} />
        ),
        tbody: ({ node, ...props }: any) => (
          <tbody className="bg-white" {...props} />
        ),
        
        // 水平线样式
        hr: ({ node, ...props }: any) => (
          <hr className="my-8 border-0 border-t-2 border-gray-200" {...props} />
        ),
        
        // 图片样式 - 响应式和居中
        img: ({ node, ...props }: any) => (
          <div className="my-8 flex justify-center">
            <img 
              className="rounded-lg shadow-lg w-full max-w-3xl mx-auto" 
              alt={props.alt || ''}
              {...props} 
            />
          </div>
        ),
        
        // 强调样式
        strong: ({ node, ...props }: any) => (
          <strong className="font-bold text-gray-900" {...props} />
        ),
        em: ({ node, ...props }: any) => (
          <em className="italic text-gray-800" {...props} />
        ),
        
        // 删除线
        del: ({ node, ...props }: any) => (
          <del className="line-through text-gray-500" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
