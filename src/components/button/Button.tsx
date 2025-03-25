import './Button.scss';

import { PropsWithChildren } from 'react';

import LoaderSpinner from '../loader-spinner/LoaderSpinner';

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
	return (
		<button
			type={`${type ?? 'button'}`}
			onClick={onClick}
			className={`button button--${theme} button--${size ?? 'medium'}-size ${className ?? ''}`}
			disabled={disabled || loading}>
			<span className={`button__content ${loading ? 'button__content--is-hidden' : ''}`}>{children}</span>
			{loading && <LoaderSpinner />}
		</button>
	);
}
