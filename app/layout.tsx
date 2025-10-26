// app/layout.tsx — site metadata for Undefined
export const metadata = {
  title: 'Undefined — 데이터 분석 멘토링',
  description: '데이터 분석 · 실전 멘토링 — 4주 커리큘럼, 포트폴리오까지.',
  openGraph: {
    title: 'Undefined — 데이터 분석 멘토링',
    description: '데이터 분석 · 실전 멘토링 — 4주 커리큘럼, 포트폴리오까지.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased text-neutral-900">{children}</body>
    </html>
  );
}

