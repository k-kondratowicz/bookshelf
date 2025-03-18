import './Dialog.scss';

import { ReactNode, useEffect, useState } from 'react';

import Teleport from '../teleport/Teleport';

export interface DialogTriggerProps {
	open: () => void;
	close: () => void;
	isOpen: boolean;
}

export interface DialogProps {
	triggerElement: ReactNode | ((props: DialogTriggerProps) => ReactNode);
	children: ReactNode | ((props: DialogTriggerProps) => ReactNode);
	hideCloseButton?: boolean;
	size?: 'small' | 'medium' | 'large';
	isOpen?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
}

export default function Dialog(props: DialogProps) {
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
						close,
						isOpen: isDialogOpen,
					})
				: props.triggerElement}

			{isDialogOpen && (
				<Teleport>
					<div className={`dialog dialog--${props.size || 'small'}`} tabIndex={-1}>
						<div className="dialog__background" onClick={close} />

						<div className="dialog__container">
							<div className="dialog__content">
								{typeof props.children === 'function'
									? props.children({
											open,
											close,
											isOpen: isDialogOpen,
										})
									: props.children}
							</div>

							{!props.hideCloseButton && (
								<button onClick={close} className="dialog__close">
									❌<span className="visually-hidden">Close</span>
								</button>
							)}
						</div>
					</div>
				</Teleport>
			)}
		</>
	);
}
