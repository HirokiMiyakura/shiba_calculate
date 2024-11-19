'use client';

import { client } from '@/libs/client';
import { useEffect, useState } from 'react';

interface Article {
	id: string;
	title: string;
	content: string;
	publishedAt: string;
	eyecatch: { url: string };
}

export function useArticles() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		async function fetchArticles() {
			try {
				setIsLoading(true);
				const data = await client.get({ endpoint: 'blogs' });
				setArticles(data.contents);
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchArticles();
	}, []);

	return { articles, isLoading, error };
}
