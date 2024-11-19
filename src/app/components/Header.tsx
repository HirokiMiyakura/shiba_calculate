export const Header = () => {
	return (
		<header className="">
			<div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 sm:py-7">
				<div className="pl-4 sm:pl-0">
					<span className="block text-xs mb-2 pr-4 sm:pr-0">
						関東圏
						<span className="hidden sm:inline-block">
							（東京・埼玉・千葉・神奈川・群馬・茨城・栃木）
						</span>
						で人工芝を施工するなら
					</span>
					<h1 className="text-2xl sm:text-4xl font-extrabold leading-none">
						<a className="hover:opacity-85" href="/">
							<span className="text-green-600">緑</span>の達人
						</a>
					</h1>
				</div>
				<ul className="hidden sm:flex gap-x-4">
					<li className="text-3xl font-extrabold text-gray-800">
						<a href="">
							☎︎ 080-3438-3925
							<br />
							<span className="text-sm block text-center text-gray-800">
								9時~17時（土日祝日除く）
							</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="hidden sm:block bg-green-600 text-white">
				<ul className="flex justify-between max-w-screen-xl mx-auto gap-x-10">
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#ABOUT"
						>
							緑の達人とは
						</a>
					</li>
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#FLOW"
						>
							サービスの流れ
						</a>
					</li>
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#SAMPLES"
						>
							施工事例
						</a>
					</li>
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#NEWS"
						>
							新着記事
						</a>
					</li>
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#VOICE"
						>
							お客様の声
						</a>
					</li>
					<li>
						<a
							className="tracking-wider py-7 block hover:opacity-85"
							href="#FAQ"
						>
							よくあるご質問
						</a>
					</li>
					<li>
						<ul className="flex">
							<li className="bg-yellow-500">
								<a
									className="tracking-widest px-10 py-7 block hover:opacity-85"
									href="#ESTIMATE"
								>
									簡単お見積り
								</a>
							</li>
							<li className="bg-orange-600">
								<a
									className="tracking-widest px-10 py-7 block hover:opacity-85"
									href="#CONTACT"
								>
									お問い合わせ
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	);
};
