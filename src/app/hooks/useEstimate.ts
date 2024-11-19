import { useState, useCallback, ChangeEvent, useEffect } from 'react';

// 移動費用の定義（各地域に応じた費用）
const travelCosts: { [key: string]: number } = {
	埼玉: 0,
	東京: 10000,
	神奈川: 10000,
	千葉: 10000,
	群馬: 10000,
	茨城: 10000,
	栃木: 10000,
};

// 芝生の種類のユニオン型
type GrassType = 'standard' | 'premium' | 'luxury';

// 各種芝生の料金
const grassRates: Record<GrassType, number> = {
	standard: 2500, // 標準芝
	premium: 4000, // プレミアム芝
	luxury: 5000, // 高級芝
};

const sheetRate = 500; // 防草シート
const materialRate = 320; // 副資材料
const nailRate = 72; // U字釘
const installationRate = 1500; // 設置費用の基本単価
const miscellaneousExpenses = 30000; // 諸経費（固定）

// 見積もりの詳細型
interface EstimateDetails {
	turfCost: number;
	sheetCost: number;
	materialCost: number;
	nailCost: number;
	installationCost: number;
	travelCost: number;
	miscellaneousExpenses: number;
	total: number;
}

// 型定義：useEstimate から返されるデータ構造
interface UseEstimate {
	area: number;
	region: string;
	grassType: GrassType;
	hasSevereWeeds: boolean;
	hasSpecialShape: boolean;
	estimate: EstimateDetails | null;
	handleAreaChange: (value: number) => void;
	handleRegionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	handleGrassTypeChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleWeedsChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleShapeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useEstimate = (): UseEstimate => {
	const [area, setArea] = useState<number>(0);
	const [region, setRegion] = useState<string>('東京');
	const [grassType, setGrassType] = useState<GrassType>('standard');
	const [hasSevereWeeds, setHasSevereWeeds] = useState<boolean>(false);
	const [hasSpecialShape, setHasSpecialShape] = useState<boolean>(false);
	const [estimate, setEstimate] = useState<EstimateDetails | null>(null);

	// 金額を計算する関数
	const calculateEstimate = useCallback(() => {
		const travelCost = travelCosts[region] || 0;
		const grassRate = grassRates[grassType]; // 型安全なアクセス

		const turfCost = area * grassRate;
		const sheetCost = area * sheetRate;
		const materialCost = area * materialRate;
		const nailCost = area * nailRate;

		// 「雑草が多い」と「形状が特殊」が両方選択された場合、1.5倍を2回適用
		let adjustedInstallationRate = installationRate;
		if (hasSevereWeeds) adjustedInstallationRate *= 1.5;
		if (hasSpecialShape) adjustedInstallationRate *= 1.5;

		const installationCost = area * adjustedInstallationRate;

		const total =
			turfCost +
			sheetCost +
			materialCost +
			nailCost +
			installationCost +
			miscellaneousExpenses +
			travelCost;

		setEstimate({
			turfCost,
			sheetCost,
			materialCost,
			nailCost,
			installationCost,
			travelCost,
			miscellaneousExpenses,
			total,
		});
	}, [area, region, grassType, hasSevereWeeds, hasSpecialShape]);

	// 状態が変更されたときに計算を実行
	useEffect(() => {
		calculateEstimate();
	}, [
		area,
		region,
		grassType,
		hasSevereWeeds,
		hasSpecialShape,
		calculateEstimate,
	]);

	const handleAreaChange = (value: number) => setArea(value);
	const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setRegion(event.target.value);
	const handleGrassTypeChange = (event: ChangeEvent<HTMLInputElement>) =>
		setGrassType(event.target.value as GrassType);
	const handleWeedsChange = (event: ChangeEvent<HTMLInputElement>) =>
		setHasSevereWeeds(event.target.checked);
	const handleShapeChange = (event: ChangeEvent<HTMLInputElement>) =>
		setHasSpecialShape(event.target.checked);

	return {
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
	};
};
