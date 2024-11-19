import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { client } from '@/libs/client';

async function fetchArticle(id: string) {
	const article = await client.get({ endpoint: 'blogs', contentId: id });
	return article;
}

export default async function ArticlePage({
	params,
}: {
	params: { id: string };
}) {
	const article = await fetchArticle(params.id);

	return (
		<>
			<Header />
			<main className="my-14 py-14">
				<div className="max-w-screen-lg mx-auto">
					<h1 className="text-4xl font-bold mb-4">{article.title}</h1>
					<p className="text-gray-600 mb-4">
						{new Date(article.publishedAt).toLocaleDateString()}
					</p>
					<img
						src={article.eyecatch?.url}
						alt={article.title}
						className="w-full h-60 object-cover rounded-md my-20"
					/>
					<div
						className="prose"
						dangerouslySetInnerHTML={{ __html: article.content }}
					/>
				</div>
			</main>
			<Footer />
		</>
	);
}
