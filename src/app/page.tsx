import Image from 'next/image';
import EstimateForm from './components/EstimateForm';
import { faqs } from './data/faqs';
import FaqItem from './components/FaqItem';
import ContactForm from './components/ContactForm';
import LatestArticles from './components/LatestArticles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainLeft } from './components/MainLeft';

export default function Home() {
	return (
		<>
			<Header />
			<main className="mt-[calc(80px)] sm:mt-0">
				<section className="relative bg-green-50 py-7 sm:py-14 hero">
					<div className="block sm:flex justify-between items-center max-w-screen-xl mx-auto hero-inner p-5 sm:p-0">
						<div>
							<MainLeft />
						</div>
						<div>
							<EstimateForm />
						</div>
					</div>
				</section>
				<section id="ABOUT" className="bg-gray-50 my-7 sm:my-14 py-7 sm:py-14">
					<div className="block sm:flex justify-between items-center max-w-screen-xl mx-auto p-5 sm:p-0">
						<div className="hidden sm:block">
							<Image
								src="/1.jpg"
								width={1000}
								height={1000}
								alt="われわれについて"
								className="rounded-lg"
							/>
						</div>
						<div className="sm:p-10">
							<h2 className="text-3xl sm:text-4xl font-extrabold mb-7 sm:mb-14 text-center sm:text-left">
								我々について
							</h2>
							<Image
								src="/1_sp.jpg"
								width={1000}
								height={1000}
								alt="われわれについて"
								className="sm:hidden rounded-lg mb-7 h-48 sm:h-auto object-fit"
							/>
							<p className="leading-loose">
								私たちは、人工芝の貼り付け工事を行う専門会社です。
								<br />
								この業界では、ネットで提示される見積額と実際の請求額が異なるケースが少なくありません。そうした不透明なやり方に疑問を感じ、もっと正直で誠実なサービスを提供したいという思いから、このサービスを立ち上げました。
								<br />
								私たちの使命は、お客様が安心してご利用いただけるサービスを提供することです。オンライン見積もりで提示した金額をそのまま最終請求額に反映させることで、信頼性と透明性を重視しています。
								<br />
								人工芝を通じて、お客様の生活をより快適に、より美しくするお手伝いをする。それが私たちの誇りです。
							</p>
						</div>
					</div>
				</section>
				<section id="FLOW" className="my-7 sm:my-14 py-7 sm:py-14">
					<div className="max-w-screen-xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-7 sm:mb-14">
							サービスの流れ
						</h2>
						<div className="block sm:flex justify-between items-center max-w-screen-xl mx-auto p-5 sm:p-0">
							<div className="">
								<h3 className="font-extrabold text-center mb-4">
									1. 本サイトで見積もりを確認
								</h3>
								<p className="mb-4">
									<Image
										src="/f1.jpg"
										width={1000}
										height={1000}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									まずはページ右上の簡単お見積もりフォームからお庭の状況をご入力下さい。
								</p>
							</div>
							<div className="text-1xl sm:text-2xl font-extrabold text-center mx-4 py-5 sm:py-0">
								<p className="text-green-600 rotate-90 sm:rotate-0">→</p>
							</div>
							<div className="">
								<h3 className="font-extrabold text-center mb-4">2. 現地調査</h3>
								<p className="mb-4">
									<Image
										src="/f2.jpg"
										width={1000}
										height={1000}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									「その他の状態」を確認するため一度現地調査をさせていただきます。
								</p>
							</div>
							<div className="text-1xl sm:text-2xl font-extrabold text-center mx-4 py-5 sm:py-0">
								<p className="text-green-600 rotate-90 sm:rotate-0">→</p>
							</div>
							<div className="">
								<h3 className="font-extrabold text-center mb-4">3. 施工開始</h3>
								<p className="mb-4">
									<Image
										src="/f3.jpg"
										width={1000}
										height={1000}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									都合の良い施工日を決定し、後日施工を開始させていただきます。
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					id="SAMPLES"
					className="bg-green-50 my-7 sm:my-14 py-7 sm:py-24"
				>
					<div className="max-w-screen-xl mx-auto p-5 sm:p-0">
						<h2 className="text-3xl sm:text-4xl font-extrabold mb-7 sm:mb-14 text-center sm:text-left">
							施工事例
						</h2>
						<p className="leading-loose mb-4 text-center sm:text-left">
							施工イメージはこちら。
						</p>
						<div className="block sm:flex justify-between items-center mb-7">
							<div className="w-[calc(100%)] sm:w-[calc(50%-14px)] relative sm:h-[300px]">
								<p className="absolute top-0 left-0 px-7 py-4 bg-gray-500 text-white rounded-tl-lg">
									Before
								</p>
								<Image
									src="/before1.jpg"
									width={1000}
									height={1000}
									alt="われわれについて"
									className="rounded-lg object-cover h-48 sm:h-auto max-h-full"
								/>
							</div>
							<div className="text-1xl sm:text-2xl font-extrabold text-center mx-4 py-4 sm:py-0">
								<p className="rotate-90 sm:rotate-0">→</p>
							</div>
							<div className="w-[calc(100%)] sm:w-[calc(50%-14px)] relative sm:h-[300px]">
								<p className="absolute top-0 left-0 px-7 py-4 bg-green-600 text-white rounded-tl-lg">
									After
								</p>
								<Image
									src="/after_1.jpg"
									width={1000}
									height={1000}
									alt="われわれについて"
									className="rounded-lg object-cover h-48 sm:h-auto max-h-full"
								/>
							</div>
						</div>
					</div>
				</section>
				<section id="NEWS" className="my-7 sm:my-14 py-7 sm:py-14">
					<div className="max-w-screen-xl mx-auto p-5 sm:p-0">
						<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-7 sm:mb-14">
							新着記事
						</h2>
						<article>
							<LatestArticles />
						</article>
						<div className="my-10 sm:my-20">
							<p className="text-white text-center bg-green-600 hover:bg-green-700 w-full sm:w-1/2 mx-auto">
								<a className="text-1xl font-extrabold py-4 block" href="/blogs">
									記事一覧へ
								</a>
							</p>
						</div>
					</div>
				</section>
				<section id="VOICE" className="my-7 sm:my-14 py-7 sm:py-14">
					<div className="max-w-screen-xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-7 sm:mb-14">
							お客様の声
						</h2>
						<div className="block sm:flex justify-between items-top max-w-screen-xl mx-auto">
							<div className="px-5 sm:px-10 py-7 sm:py-10 bg-gray-50 w-full sm:w-1/3">
								<h3 className="font-extrabold text-center mb-4">
									子どもが安心して遊べる庭に！
								</h3>
								<p className="mb-4 text-center mx-auto">
									{/* <img src="./v1.jpg" className="h-64 rounded-full p-7" /> */}
									<Image
										src="/v1.jpg"
										width={1000}
										height={1000}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									庭が雑草だらけで子どもが遊ぶのをためらっていましたが、人工芝を敷いてからは安心して遊ばせられるようになりました。ふかふかで柔らかいので転んでも怪我の心配が少なく、子どもたちも大喜びです。お見積もりの通りで追加費用がかからなかったのも安心ポイントでした！
									<br />
									<span className="text-gray-900 text-sm font-extrabold">
										（東京都 T様・ファミリー世帯）
									</span>
								</p>
							</div>
							<div className="px-5 sm:px-10 py-7 sm:py-10 bg-gray-100 w-full sm:w-1/3">
								<h3 className="font-extrabold text-center mb-4">
									手入れが不要で毎日快適！
								</h3>
								<p className="mb-4 text-center mx-auto">
									{/* <img src="./v2.jpg" className="h-64 rounded-full p-7" /> */}
									<Image
										src="/v2.jpg"
										width={400}
										height={400}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									以前は芝生の手入れが本当に大変で、夏は雑草取りに追われていました。でも、人工芝に変えてからは草刈りの手間が一切なくなり、いつも綺麗な庭をキープできています。見積もり時の説明も丁寧で安心してお願いすることができました。
									<br />
									<span className="text-gray-900 text-sm font-extrabold">
										（神奈川県 K様・シニア世帯）
									</span>
								</p>
							</div>
							<div className="px-5 sm:px-10 py-7 sm:py-10 bg-gray-50 w-full sm:w-1/3">
								<h3 className="font-extrabold text-center mb-4">
									家全体の印象が明るく！
								</h3>
								<p className="mb-4 text-center mx-auto">
									{/* <img src="./v3.jpg" className="h-64 rounded-full p-7" /> */}
									<Image
										src="/v3.jpg"
										width={400}
										height={400}
										alt="われわれについて"
										className="rounded-lg h-48 sm:h-auto"
									/>
								</p>
								<p className="leading-loose">
									家の前庭を人工芝にしたところ、見た目がとても明るくおしゃれになりました。ご近所の方からも『素敵な庭になりましたね』と褒められることが増えました。追加料金もなくスムーズに施工していただき、本当に感謝しています。
									<br />
									<span className="text-gray-900 text-sm font-extrabold">
										（大阪府 Y様・夫婦世帯）
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
				<section id="FAQ" className="bg-green-50 my-7 sm:my-14 py-7 sm:py-24">
					<div className="max-w-screen-md mx-auto p-5 sm:p-0">
						<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-7 sm:mb-14">
							よくあるご質問
						</h2>
						<div className="max-w-full mx-auto">
							<div className="space-y-6">
								{faqs.map((faq, index) => (
									<FaqItem
										key={index}
										question={faq.question}
										answer={faq.answer}
									/>
								))}
							</div>
						</div>
					</div>
				</section>
				<section id="CONTACT" className="my-7 sm:my-14 py-7 sm:py-14">
					<div className="max-w-screen-md mx-auto p-5 sm:p-0">
						<h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-7 sm:mb-14">
							お問い合わせ
						</h2>
						<ContactForm />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
