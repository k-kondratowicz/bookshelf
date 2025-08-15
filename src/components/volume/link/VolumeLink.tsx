import classNames from 'classnames';
import { Link } from 'react-router';

import VolumeHeader from '@/components/volume/header/VolumeHeader';
import VolumeThumbnail from '@/components/volume/thumbnail/VolumeThumbnail';
import { VolumeFull, VolumeSimple } from '@/types/volume';

import styles from './VolumeLink.module.scss';

export interface VolumeLinkProps {
	volume: VolumeSimple | VolumeFull;
	className?: string;
}

export default function VolumeLink({ volume, className }: VolumeLinkProps) {
	const { imageLinks } = volume.volumeInfo;

	return (
		<Link to={`/volume/${volume.id}`} className={classNames(styles.container, className)}>
			{imageLinks && <VolumeThumbnail className={styles.visual} thumbnailUrl={imageLinks.thumbnail} />}

			<VolumeHeader volume={volume} className={styles.info} />
		</Link>
	);
}
