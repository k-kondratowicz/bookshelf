import './Dialog.scss';

import classNames from 'classnames';
import { ReactNode, SyntheticEvent, useCallback, useEffect, useState } from 'react';

import Teleport from '../teleport/Teleport';
import DialogBackdrop from './backdrop/DialogBackdrop';

export interface DialogTriggerProps {
	open: () => void;
	close: () => void;
	isOpen: boolean;
}

export interface DialogProps {
	triggerElement?: ReactNode | ((props: DialogTriggerProps) => ReactNode);
	children: ReactNode | ((props: DialogTriggerProps) => ReactNode);
	hideCloseButton?: boolean;
	size?: 'small' | 'medium' | 'large';
	isOpen?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
}

export default function Dialog(props: DialogProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(!!props.isOpen);
	const [isAnimatingIn, setIsAnimatingIn] = useState(false);
	const [isAnimatingOut, setIsAnimatingOut] = useState(false);
	const [dialogRoot, setDialogRoot] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		if (props.isOpen) {
			open();

			return;
		}

		close();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.isOpen]);

	useEffect(() => {
		if (!dialogRoot) {
			return;
		}

		setIsAnimatingIn(true);
	}, [dialogRoot]);

	const open = useCallback(() => {
		setIsDialogOpen(true);
		props.onClose?.();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const close = useCallback(() => {
		setIsAnimatingIn(false);
		setIsAnimatingOut(true);
	}, []);

	const handleTransitionEnd = (ev: SyntheticEvent<HTMLDivElement, TransitionEvent>) => {
		if ((ev.target as HTMLElement).classList.contains('dialog--is-animating-out')) {
			setIsDialogOpen(false);
			props.onClose?.();
		}
	};

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
					<DialogBackdrop />

					<div
						className={classNames('dialog', [
							`dialog--${props.size || 'small'}`,
							{
								'dialog--is-animating-in': isAnimatingIn,
								'dialog--is-animating-out': isAnimatingOut && !isAnimatingIn,
							},
						])}
						onTransitionEnd={handleTransitionEnd}
						tabIndex={-1}
						ref={setDialogRoot}>
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
