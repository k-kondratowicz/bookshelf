import './VolumeInfoBox.scss';

import { ReactNode } from 'react';

export interface VolumeInfoBox {
	title: string;
	children: ReactNode;
	className?: string;
}

export default function VolumeInfoBox({ title, children, className }: VolumeInfoBox) {
	return (
		<div className={`volume-info-box ${className ?? ''}`}>
			<h3 className="volume-info-box__title">{title}</h3>

			<div className="volume-info-box__inner">{children}</div>
		</div>
	);
}
