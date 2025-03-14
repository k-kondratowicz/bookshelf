import { useEffect, useState } from 'react';

import { Teleport } from '../teleport/Teleport';

export interface DialogTriggerProps {
	open: () => void;
	isOpen: boolean;
}

export interface DialogProps {
	triggerElement: React.ReactNode | ((props: DialogTriggerProps) => React.ReactNode);
	children: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	isOpen?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
}

export function Dialog(props: DialogProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(!!props.isOpen);

	useEffect(() => {
		setIsDialogOpen(!!props.isOpen);
	}, [props.isOpen]);

	function open() {
		setIsDialogOpen(true);
		props.onClose?.();
	}

	function close() {
		setIsDialogOpen(false);
		props.onClose?.();
	}

	return (
		<>
			{typeof props.triggerElement === 'function'
				? props.triggerElement({
						open,
						isOpen: isDialogOpen,
					})
				: props.triggerElement}

			{isDialogOpen && (
				<Teleport>
					<div className={`dialog dialog--${props.size || 'small'}`}>
						<div className="dialog__background" onClick={close} />

						<div className="dialog__content">
							{props.children}

							<button onClick={close} className="dialog__close">
								Close
							</button>
						</div>
					</div>
				</Teleport>
			)}
		</>
	);
}
