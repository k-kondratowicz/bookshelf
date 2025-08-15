import classNames from 'classnames';

import { capitalize } from '@/utils/capitalize';

import styles from './VolumeThumbnail.module.scss';

export interface VolumeThumbnailProps {
	thumbnailUrl: string;
	size?: 'auto' | 'default';
	className?: string;
}

export default function VolumeThumbnail({ thumbnailUrl, size = 'default', className }: VolumeThumbnailProps) {
	return (
		<div className={classNames(styles.container, styles?.[`size${capitalize(size)}`], className)}>
			<img src={thumbnailUrl} alt="" className={styles.image} loading="lazy" />
		</div>
	);
}
