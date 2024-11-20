'use client';

import Image from 'next/image';
import { fetchBlogs } from '../hooks/useArticles';
import Link from 'next/link';

export default async function AllArticles() {
	const blogs = await fetchBlogs();
	// console.log(blogs);

	return (
		<div>
			{blogs.map((blog) => (
				<Link key={blog.id} href={`/blogs/${blog.id}`} className="text-black">
					<div className="mx-auto mb-14 block max-w-screen-xl rounded-xl bg-white shadow sm:flex">
						<div className="relative h-48 w-full sm:w-2/5 sm:pe-8">
							<Image
								src={blog.eyecatch?.url}
								alt={blog.title}
								fill
								// width={1000}
								// height={400}
								className="h-48 w-full max-h-full rounded-t-xl object-cover sm:rounded-bl-xl sm:rounded-tr-none"
							/>
						</div>
						<div className="p-5 sm:pt-7">
							<p className="sm:text-1xl mb-2 text-sm text-gray-700">
								{new Date(blog.publishedAt).toLocaleDateString()}
							</p>
							<p className="text-1xl font-extrabold sm:text-2xl">
								{blog.title}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
