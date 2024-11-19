import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

// Googleフォント設定
const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '700'], // 必要なウェイトを指定
	display: 'swap', // パフォーマンス向上のための設定
});

export const metadata: Metadata = {
	title: '緑の達人',
	description: '関東圏で人工芝を施工するなら我々にお任せください',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <html lang="ja" className={notoSansJP.className}>
		// 	<body className="antialiased">{children}</body>
		// </html>
		<html lang="en">
			<body className={notoSansJP.className}>
				<Header />
				{/* <main className="my-14 py-14"> */}
				<main className="mt-[calc(80px)] sm:mt-0">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
