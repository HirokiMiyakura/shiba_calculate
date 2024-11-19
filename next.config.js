/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.microcms-assets.io'], // ここにホスト名を追加
	},
};

module.exports = nextConfig;
