import { createClient } from 'microcms-js-sdk';

// 環境変数を確認するためのログ
console.log('Service Domain:', process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);
console.log('API Key:', process.env.NEXT_PUBLIC_MICROCMS_API_KEY);

// エラーチェック
if (
	!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
	!process.env.NEXT_PUBLIC_MICROCMS_API_KEY
) {
	throw new Error(
		'Missing environment variables: Check NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN and NEXT_PUBLIC_MICROCMS_API_KEY'
	);
}

export const client = createClient({
	serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
	apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});
