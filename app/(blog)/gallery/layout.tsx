import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '照片墙',
  description: '分享美好的瞬间，记录生活的精彩',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

