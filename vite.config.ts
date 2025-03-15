import react from '@vitejs/plugin-react';
import postcssAutoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig, normalizePath } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

const cwd = normalizePath(__dirname);

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: true,
		}),
		svgr(),
	],

	resolve: {
		alias: {
			'@': path.resolve(cwd, './src/'),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import '${path.resolve(cwd, './src/')}/sass/index.scss';`,
				silenceDeprecations: ['import'],
			},
		},

		postcss: {
			plugins: [postcssAutoprefixer() as any],
		},
	},

	server: {
		cors: true,
		port: 28267,
		proxy: {},
	},
});
