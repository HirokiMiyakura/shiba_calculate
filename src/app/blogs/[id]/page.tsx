// import { client } from '@/libs/client';
import Image from 'next/image';
import { fetchBlog } from '@/app/hooks/useArticles';
import { notFound } from 'next/navigation';

type BlogPostProps = {
	params: { id: string };
};

export default async function BlogPost({ params }: BlogPostProps) {
	const blog = await fetchBlog(params.id);
	// console.log(params);
	if (!blog) {
		notFound();
	}

	return (
		<div className="my-14 py-14">
			<div className="mx-auto mb-14 block max-w-screen-xl">
				<h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
				<p className="text-gray-600 mb-4">
					{new Date(blog.publishedAt).toLocaleDateString()}
				</p>
				<Image
					src={blog.eyecatch?.url || '/placeholder.jpg'}
					alt={blog.title}
					width={1000}
					height={400}
					className="w-full h-60 object-cover rounded-md my-20"
				/>
				<div
					className="prose"
					dangerouslySetInnerHTML={{ __html: blog.content }}
				/>
			</div>
		</div>
	);
}
