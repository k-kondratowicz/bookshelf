import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalPameters = Parameters<typeof createPortal>;

export interface TeleportProps extends Required<PropsWithChildren> {
	container?: PortalPameters[1];
	key?: PortalPameters[2];
}

export default function Teleport(props: TeleportProps) {
	const teleportTarget = props.container || document.body;

	return createPortal(props.children, teleportTarget, props.key);
}
