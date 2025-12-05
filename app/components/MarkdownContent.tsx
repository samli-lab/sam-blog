'use client';

import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import LazyImage from './LazyImage';
import 'katex/dist/katex.min.css';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const { theme } = useTheme();
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 动态加载 Mermaid
    const loadMermaid = async () => {
      if (typeof window !== 'undefined') {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: true,
          theme: theme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        
        // 重新渲染图表
        const mermaidElements = document.querySelectorAll('.mermaid-chart');
        mermaidElements.forEach(async (element, index) => {
          if (element.getAttribute('data-processed')) return;
          
          try {
            const code = element.textContent || '';
            const id = `mermaid-${index}-${Date.now()}`;
            const { svg } = await mermaid.render(id, code);
            element.innerHTML = svg;
            element.setAttribute('data-processed', 'true');
          } catch (error) {
            console.error('Mermaid rendering failed:', error);
            element.innerHTML = '<div class="text-red-500">图表渲染失败</div>';
          }
        });
      }
    };

    loadMermaid();
  }, [content, theme]);

  return (
    <div ref={mermaidRef}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // ...之前的组件配置...
          h1: ({ node, ...props }: any) => (
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-6 pb-3 border-b-2 border-gray-200 dark:border-gray-700 leading-tight" {...props} />
          ),
          h2: ({ node, ...props }: any) => (
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-5 pb-2 border-b border-gray-100 dark:border-gray-800 leading-tight" {...props} />
          ),
          h3: ({ node, ...props }: any) => (
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-7 mb-4 leading-tight" {...props} />
          ),
          h4: ({ node, ...props }: any) => (
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3 leading-tight" {...props} />
          ),
          h5: ({ node, ...props }: any) => (
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white mt-5 mb-2 leading-tight" {...props} />
          ),
          h6: ({ node, ...props }: any) => (
            <h6 className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2 leading-tight" {...props} />
          ),
          p: ({ node, ...props }: any) => (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5 text-lg" {...props} />
          ),
          ul: ({ node, ...props }: any) => (
            <ul className="list-disc list-outside mb-5 space-y-2 text-gray-700 dark:text-gray-300 text-lg ml-6" {...props} />
          ),
          ol: ({ node, ...props }: any) => (
            <ol className="list-decimal list-outside mb-5 space-y-2 text-gray-700 dark:text-gray-300 text-lg ml-6" {...props} />
          ),
          li: ({ node, ...props }: any) => (
            <li className="leading-relaxed pl-2" {...props} />
          ),
          a: ({ node, ...props }: any) => (
            <a 
              className="text-[#49b1f5] hover:text-[#2ba1f3] border-b border-[#49b1f5] hover:border-[#2ba1f3] transition-colors" 
              target="_blank"
              rel="noopener noreferrer"
              {...props} 
            />
          ),
          blockquote: ({ node, ...props }: any) => (
            <blockquote 
              className="border-l-4 border-[#49b1f5] pl-6 py-3 my-6 bg-[#49b1f5]/10 italic text-gray-700 dark:text-gray-300 rounded-r-lg" 
              {...props} 
            />
          ),
          img: ({ node, ...props }: any) => (
            <div className="my-8 flex justify-center">
              <LazyImage
                src={props.src || ''}
                alt={props.alt || ''}
                className="rounded-lg shadow-lg w-full max-w-3xl mx-auto"
              />
            </div>
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            // 处理 mermaid
            if (language === 'mermaid') {
              return (
                <div className="my-8 flex justify-center bg-white dark:bg-white/90 p-4 rounded-lg shadow-sm">
                  <div className="mermaid-chart text-gray-800">
                    {children}
                  </div>
                </div>
              );
            }
            
            if (!inline && language) {
              return (
                <div className="my-6">
                  <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono text-gray-500">{language}</span>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <SyntaxHighlighter
                    language={language}
                    style={theme === 'dark' ? oneDark : oneLight}
                    PreTag="div"
                    className="!mt-0 !rounded-t-none rounded-b-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      background: theme === 'dark' ? '#1f2937' : '#f9fafb',
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
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-[#e06c75] rounded text-sm font-mono mx-1" 
                {...props}
              >
                {children}
              </code>
            );
          },
          table: ({ node, ...props }: any) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="min-w-full border-collapse" {...props} />
            </div>
          ),
          thead: ({ node, ...props }: any) => (
            <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
          ),
          th: ({ node, ...props }: any) => (
            <th className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white text-sm" {...props} />
          ),
          td: ({ node, ...props }: any) => (
            <td className="border-b border-gray-100 dark:border-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300 text-sm" {...props} />
          ),
          tbody: ({ node, ...props }: any) => (
            <tbody className="bg-white dark:bg-gray-900" {...props} />
          ),
          hr: ({ node, ...props }: any) => (
            <hr className="my-8 border-0 border-t-2 border-dashed border-gray-200 dark:border-gray-700" {...props} />
          ),
          strong: ({ node, ...props }: any) => (
            <strong className="font-bold text-gray-900 dark:text-white" {...props} />
          ),
          em: ({ node, ...props }: any) => (
            <em className="italic text-gray-800 dark:text-gray-200" {...props} />
          ),
          del: ({ node, ...props }: any) => (
            <del className="line-through text-gray-500 dark:text-gray-400" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
