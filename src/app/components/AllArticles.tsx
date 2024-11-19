'use client';

import { useArticles } from '../hooks/useArticles';
import Link from 'next/link';

export default function AllArticles() {
	const { articles, isLoading, error } = useArticles();

	if (isLoading) return <p>記事を読み込んでいます...</p>;
	if (error) return <p>記事の読み込み中にエラーが発生しました。</p>;

	// JSX全体を括弧で囲む
	return (
		<div>
			{articles.map((article) => (
				<Link
					key={article.id}
					href={`/blogs/${article.id}`}
					className="text-black"
				>
					<div className="mx-auto mb-14 block max-w-screen-xl rounded-xl bg-white shadow sm:flex">
						<div className="relative h-48 w-full sm:w-2/5 sm:pe-8">
							<img
								className="h-48 w-full rounded-t-xl object-cover sm:rounded-bl-xl sm:rounded-tr-none"
								src="hero1.jpg"
								alt=""
							/>
						</div>
						<div className="p-5 sm:pt-7">
							<p className="sm:text-1xl mb-2 text-sm text-gray-700">
								{new Date(article.publishedAt).toLocaleDateString()}
							</p>
							<p className="text-1xl font-extrabold sm:text-2xl">
								{article.title}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}