import './VolumeHeader.scss';

import { ReactNode } from 'react';

import { VolumeFull, VolumeSimple } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';

export interface VolumeHeaderProps {
	volume: VolumeSimple | VolumeFull;
	titleSize?: 'small' | 'medium' | 'large';
	authorsSize?: 'small' | 'medium' | 'large';
	className?: string;
	children?: ReactNode;
}

export default function VolumeHeader({
	volume,
	titleSize = 'small',
	authorsSize = 'small',
	className,
	children,
}: VolumeHeaderProps) {
	const { title, authors } = volume.volumeInfo;

	return (
		<div className={`volume-header ${className || ''}`}>
			<h2 className={`volume-header__title volume-header__title--${titleSize}`}>{title}</h2>
			<div className={`volume-header__authors volume-header__authors--${authorsSize}`}>{parseAuthors(authors)}</div>

			{children}
		</div>
	);
}
