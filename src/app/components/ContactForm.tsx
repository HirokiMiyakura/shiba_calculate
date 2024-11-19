'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		address: '',
		message: '',
	});

	const [status, setStatus] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('loading');

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formData,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
			setStatus('success');
			setFormData({ name: '', phone: '', email: '', address: '', message: '' });
		} catch (error) {
			console.error('メール送信エラー:', error);
			setStatus('error');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium mb-2">
						お名前（必須）
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						電話番号（必須）
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						required
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						メールアドレス
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						施工場所の住所（必須）
					</label>
					<input
						type="text"
						name="address"
						value={formData.address}
						onChange={handleChange}
						required
						className="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						お問い合わせ内容
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2 h-64"
					/>
				</div>
				<button
					type="submit"
					className="w-full p-5 rounded-md font-bold bg-green-600 hover:bg-green-700 text-white"
				>
					送信
				</button>
			</form>
			{status === 'loading' && <p className="mt-4 text-blue-500">送信中...</p>}
			{status === 'success' && (
				<p className="mt-4 text-green-500">送信が完了しました！</p>
			)}
			{status === 'error' && (
				<p className="mt-4 text-red-500">送信中にエラーが発生しました。</p>
			)}
		</div>
	);
}
