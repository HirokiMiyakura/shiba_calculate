import { client } from '@/libs/client';

type Blog = {
	id: string;
	title: string;
	eyecatch: { url: string };
	content: string;
	publishedAt: string;
};

// 記事一覧を取得する関数
export async function fetchBlogs(): Promise<Blog[]> {
	try {
		const data = await client.get({ endpoint: 'blogs' });
		return data.contents as Blog[];
	} catch (error) {
		console.error('Failed to fetch blogs:', error);
		return [];
	}
}

// 最新記事3件を取得する関数
export async function fetchLatestBlogs(): Promise<Blog[]> {
	try {
		const data = await client.get({ endpoint: 'blogs', queries: { limit: 3 } });
		return data.contents as Blog[];
	} catch (error) {
		console.error('Failed to fetch blogs:', error);
		return [];
	}
}

// 個別記事を取得する関数
export async function fetchBlog(id: string): Promise<Blog | null> {
	try {
		const blog = await client.get({
			endpoint: 'blogs',
			contentId: id,
		});
		return blog as Blog;
	} catch (error) {
		console.error('Failed to fetch blog post:', error);
		return null;
	}
}
