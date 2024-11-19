'use client';

import React, { useState } from 'react';

interface FaqItemProps {
	question: string;
	answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="border-b border-gray-300 py-4 cursor-pointer"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold pr-4 sm:pr-0">{question}</h3>
				<span
					className={`transform ${
						isOpen ? 'rotate-180' : 'rotate-0'
					} text-green-600`}
				>
					▼
				</span>
			</div>
			{isOpen && <p className="mt-5 text-gray-900">{answer}</p>}
		</div>
	);
};

export default FaqItem;
