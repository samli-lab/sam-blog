// ...
    cover: 'https://picsum.photos/seed/1/1200/600',
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

## 数学公式示例

行内公式：$E = mc^2$

块级公式：

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

## Mermaid 流程图示例

\`\`\`mermaid
graph TD
    A[开始] --> B{是否登录?}
    B -->|是| C[显示主页]
    B -->|否| D[跳转登录页]
    C --> E[结束]
    D --> E
\`\`\`

## 总结

Next.js 16 为开发者提供了更好的开发体验和性能。建议尽快升级你的项目！
`,
  };
}
// ...
