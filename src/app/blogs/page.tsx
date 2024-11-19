import AllArticles from '../components/AllArticles';

export default async function Blogs() {
	return (
		<>
			<div className="my-14 py-14">
				<h2 className="text-4xl font-extrabold text-center mb-14">記事一覧</h2>
				<AllArticles />
			</div>
		</>
	);
}
