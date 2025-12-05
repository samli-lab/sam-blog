import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '留言板',
  description: '留下你的足迹和想法，与我交流互动',
};

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

