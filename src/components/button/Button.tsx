import './Button.scss';

import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	onClick?: () => void;
	theme: 'light' | 'medium' | 'dark';
	className?: string;
}

export default function Button({ theme, onClick, className, children }: ButtonProps) {
	return (
		<button onClick={() => onClick?.()} className={`button button--${theme} ${className}`}>
			{children}
		</button>
	);
}
