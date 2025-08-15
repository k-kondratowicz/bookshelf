import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './VolumeInfoBox.module.scss';

export interface VolumeInfoBox {
	title: string;
	children: ReactNode;
	className?: string;
}

export default function VolumeInfoBox({ title, children, className }: VolumeInfoBox) {
	return (
		<div className={classNames(className)}>
			<h3 className={styles.title}>{title}</h3>

			<div className={styles.inner}>{children}</div>
		</div>
	);
}
