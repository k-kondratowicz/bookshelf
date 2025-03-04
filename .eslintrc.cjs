module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', '.prettierrc.cjs', 'stylelint.config.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-refresh', 'simple-import-sort', '@typescript-eslint'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

		'prettier/prettier': 'warn',

		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
	},
};
