import { useVolumeQuery } from '@/hooks/queries';

import VolumeDescription from '../description/VolumeDescription';
import VolumeEdition from '../edition/VolumeEdition';
import VolumeHeader from '../header/VolumeHeader';
import VolumePublisher from '../publisher/VolumePublisher';
import VolumeThumbnail from '../thumbnail/VolumeThumbnail';
import styles from './VolumeSingle.module.scss';

export interface VolumeSingleProps {
	volumeId: string;
}

export default function VolumeSingle({ volumeId }: VolumeSingleProps) {
	const { data: volume, isPending, isError } = useVolumeQuery(volumeId);

	if (isPending) {
		// todo: add skeleton
		return <div>Loading...</div>;
	}

	if (isError) {
		// todo: error handling & redirect
		return null;
	}

	return (
		<div>
			<VolumeHeader volume={volume} titleSize="large" authorsSize="medium" className={styles.header}>
				{volume.volumeInfo.imageLinks?.thumbnail && (
					<VolumeThumbnail
						size="auto"
						thumbnailUrl={volume.volumeInfo.imageLinks.thumbnail}
						className={styles.thumbnail}
					/>
				)}
			</VolumeHeader>

			<div className={styles.content}>
				{volume.volumeInfo.description && <VolumeDescription description={volume.volumeInfo.description} />}

				<div className={styles.side}>
					<VolumeEdition volume={volume} />

					{volume.volumeInfo.publisher && <VolumePublisher publisher={volume.volumeInfo.publisher} />}
				</div>
			</div>
		</div>
	);
}
