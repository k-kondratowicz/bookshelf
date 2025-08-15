import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import LoaderSpinner from '@/components/loader-spinner/LoaderSpinner';

import styles from './Button.module.scss';

export interface ButtonProps extends Required<PropsWithChildren> {
	onClick?: () => void;
	theme: 'light' | 'medium' | 'dark';
	type?: 'button' | 'submit' | 'reset';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	loading?: boolean;
	className?: string;
}

export default function Button({ theme, size, onClick, className, children, type, disabled, loading }: ButtonProps) {
	const stylesSize = styles[`${size || 'medium'}Size` as keyof typeof styles];

	return (
		<button
			type={`${type ?? 'button'}`}
			onClick={onClick}
			className={classNames(styles.button, styles[theme], stylesSize, className)}
			disabled={disabled || loading}
		>
			<span className={`${styles.content} ${loading ? styles.isHidden : ''}`}>{children}</span>
			{loading && <LoaderSpinner />}
		</button>
	);
}
