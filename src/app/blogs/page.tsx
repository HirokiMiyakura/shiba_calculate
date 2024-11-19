import AllArticles from '../components/AllArticles';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default async function Blogs() {
	return (
		<>
			<Header />
			<main className="my-14 py-14">
				<h2 className="text-4xl font-extrabold text-center mb-14">記事一覧</h2>
				<AllArticles />
			</main>
			<Footer />
		</>
	);
}
