import Link from 'next/link';

type MenuItem = {
	label: string;
	href: string;
};

type MenuListProps = {
	className?: string;
	onClick?: () => void;
};

const menuItems: MenuItem[] = [
	// { label: 'トップ', href: '/' },
	{ label: '緑の達人とは', href: '#ABOUT' },
	{ label: 'サービスの流れ', href: '#FLOW' },
	{ label: '施工事例', href: '#SAMPLES' },
	{ label: '新着記事', href: '#NEWS' },
	{ label: 'お客様の声', href: '#VOICE' },
	{ label: 'よくあるご質問', href: '#FAQ' },
	{ label: '簡単お見積り', href: '#ESTIMATE' },
	{ label: 'お問い合わせ', href: '#CONTACT' },
];

export default function MenuList({ className = '', onClick }: MenuListProps) {
	return (
		<>
			<ul>
				{menuItems.map((item) => (
					<li key={item.href} className={className}>
						<Link href={item.href} onClick={onClick}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
