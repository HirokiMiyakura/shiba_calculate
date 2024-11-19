'use client';

import { useEstimate } from '../hooks/useEstimate';
import { useState, useEffect } from 'react';

const EstimateForm: React.FC = () => {
	const {
		area,
		region,
		grassType,
		hasSevereWeeds,
		hasSpecialShape,
		estimate,
		handleAreaChange,
		handleRegionChange,
		handleGrassTypeChange,
		handleWeedsChange,
		handleShapeChange,
	} = useEstimate();

	const [inputArea, setInputArea] = useState<string>(area.toString());
	const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
	const [isEstimateVisible, setIsEstimateVisible] = useState<boolean>(false);

	useEffect(() => {
		setIsSubmitDisabled(inputArea === '' || parseInt(inputArea) === 0);
	}, [inputArea]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (/^\d*$/.test(value)) {
			setInputArea(value);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const areaValue = parseInt(inputArea) || 0;
		handleAreaChange(areaValue);
		setIsEstimateVisible(true);
	};

	return (
		<div className="min-w-full sm:min-w-[400px] max-w-xl p-4 sm:p-8 bg-gray-50 opacity-95 rounded-xl mt-7 sm:mt-0">
			<h2
				id="ESTIMATE"
				className="text-1xl sm:text-2xl font-bold text-center mb-4 sm:mb-8 border-b-2 pb-4 sm:pb-7"
			>
				簡単見積もり
			</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* 施工面積入力 */}
				<div>
					<label
						htmlFor="area"
						className="block text-sm font-medium text-gray-700 mb-2 sm:mb-4"
					>
						施工面積（㎡）
					</label>
					<input
						id="area"
						type="text"
						value={inputArea}
						onChange={handleInputChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
						placeholder="0"
					/>
				</div>
				{/* 都道府県の選択 */}
				<div>
					<label
						htmlFor="region"
						className="block text-sm font-medium text-gray-700 mb-2 sm:mb-4"
					>
						都道府県
					</label>
					<select
						id="region"
						value={region}
						onChange={handleRegionChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
					>
						<option value="東京">東京</option>
						<option value="埼玉">埼玉</option>
						<option value="千葉">千葉</option>
						<option value="神奈川">神奈川</option>
						<option value="群馬">群馬</option>
						<option value="茨城">茨城</option>
						<option value="栃木">栃木</option>
					</select>
				</div>

				{/* 芝生の種類の選択（縦組） */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-4">
						芝生の種類
					</label>
					<div className="space-y-4">
						<label className="flex items-center space-x-3">
							<input
								type="radio"
								name="grassType"
								value="standard"
								checked={grassType === 'standard'}
								onChange={handleGrassTypeChange}
								className="text-green-600 focus:ring-indigo-500"
							/>
							<span>標準芝 (¥2,500/㎡)</span>
						</label>
						<label className="flex items-center space-x-3">
							<input
								type="radio"
								name="grassType"
								value="premium"
								checked={grassType === 'premium'}
								onChange={handleGrassTypeChange}
								className="text-green-600 focus:ring-indigo-500"
							/>
							<span>プレミアム芝 (¥4,000/㎡)</span>
						</label>
						<label className="flex items-center space-x-3">
							<input
								type="radio"
								name="grassType"
								value="luxury"
								checked={grassType === 'luxury'}
								onChange={handleGrassTypeChange}
								className="text-green-600 focus:ring-indigo-500"
							/>
							<span>高級芝 (¥5,000/㎡)</span>
						</label>
					</div>
				</div>

				{/* 雑草の状態（複数選択可） */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-4">
						その他の状態
					</label>
					<div className="space-y-4">
						<label className="flex items-center space-x-3">
							<input
								type="checkbox"
								checked={hasSevereWeeds}
								onChange={handleWeedsChange}
								className="text-green-600 focus:ring-indigo-500"
							/>
							<span>雑草が多い</span>
						</label>
						<label className="flex items-center space-x-3">
							<input
								type="checkbox"
								checked={hasSpecialShape}
								onChange={handleShapeChange}
								className="text-green-600 focus:ring-indigo-500"
							/>
							<span>形状が特殊</span>
						</label>
					</div>
				</div>

				{/* 見積もりを計算ボタン */}
				<button
					type="submit"
					disabled={isSubmitDisabled}
					className={`w-full py-3 rounded-md font-bold transition ${
						isSubmitDisabled
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-indigo-600 hover:bg-indigo-700 text-white'
					}`}
				>
					見積もりを計算
				</button>
			</form>

			{/* 見積もり結果の表示 */}
			{isEstimateVisible && estimate && (
				<div className="mt-8 p-6 bg-gray-50 rounded-md shadow-inner">
					<h3 className="text-xl font-semibold mb-4">見積もり詳細</h3>
					<ul className="space-y-2 text-gray-700">
						<li className="text-xs">
							人工芝費用: {estimate.turfCost.toLocaleString()} 円
						</li>
						<li className="text-xs">
							防草シート費用: {estimate.sheetCost.toLocaleString()} 円
						</li>
						<li className="text-xs">
							副資材料費用: {estimate.materialCost.toLocaleString()} 円
						</li>
						<li className="text-xs">
							U字釘費用: {estimate.nailCost.toLocaleString()} 円
						</li>
						<li className="text-xs">
							設置費用: {estimate.installationCost.toLocaleString()} 円
						</li>
						<li className="text-xs">
							諸経費: {estimate.miscellaneousExpenses.toLocaleString()} 円
						</li>
						<li className="text-xs">
							移動費用: {estimate.travelCost.toLocaleString()} 円
						</li>
						<li className="text-2xl text-yellow-600 font-extrabold">
							総額: {estimate.total.toLocaleString()} 円
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default EstimateForm;
