import classNames from 'classnames';
import { ReactNode } from 'react';

import { VolumeFull, VolumeSimple } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';

import styles from './VolumeHeader.module.scss';

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
		<div className={classNames(styles.container, className)}>
			<h2 className={classNames(styles.title, styles?.[titleSize])}>{title}</h2>
			<div className={classNames(styles.authors, styles?.[authorsSize])}>{parseAuthors(authors)}</div>

			{children}
		</div>
	);
}
