import './Button.scss';

import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
	onClick?: () => void;
	theme: 'light' | 'medium' | 'dark';
	type?: 'button' | 'submit' | 'reset';
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	className?: string;
}

export default function Button({ theme, size, onClick, className, children, type, disabled }: ButtonProps) {
	return (
		<button
			type={`${type ?? 'button'}`}
			onClick={() => onClick?.()}
			className={`button button--${theme} button--${size ?? 'medium'}-size ${className ?? ''}`}
			disabled={disabled}>
			{children}
		</button>
	);
}
