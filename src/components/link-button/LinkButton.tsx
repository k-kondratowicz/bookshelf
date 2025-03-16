import { To, useNavigate } from 'react-router';

import Button, { ButtonProps } from '../button/Button';

export interface LinkButtonProps extends Omit<ButtonProps, 'type'> {
	to: To;
}

export default function LinkButton(props: LinkButtonProps) {
	const navigate = useNavigate();

	const { to, onClick, children, ...restProps } = props;

	function handleClick() {
		onClick?.();
		navigate(to);
	}

	return (
		<Button {...restProps} onClick={handleClick}>
			{children}
		</Button>
	);
}
