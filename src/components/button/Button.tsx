import './Button.scss';

import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	onClick?: () => void;
	theme: 'light' | 'medium' | 'dark';
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

export default function Button({ theme, size, onClick, className, children }: ButtonProps) {
	return (
		<button onClick={() => onClick?.()} className={`button button--${theme} button--${size ?? 'medium'} ${className}`}>
			{children}
		</button>
	);
}
