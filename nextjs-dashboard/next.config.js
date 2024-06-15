/** @type {import('next').NextConfig} */

const nextConfig = {

	sassOptions: {
		includePaths: ['./src'],
		prependData: `@import "./styles/variable.scss";`,
	}
};

module.exports = nextConfig;
