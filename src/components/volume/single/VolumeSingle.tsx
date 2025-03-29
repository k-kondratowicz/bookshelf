import './VolumeSingle.scss';

import { useVolumeQuery } from '@/hooks/queries';

import VolumeDescription from '../description/VolumeDescription';
import VolumeEdition from '../edition/VolumeEdition';
import VolumeHeader from '../header/VolumeHeader';
import VolumePublisher from '../publisher/VolumePublisher';
import VolumeThumbnail from '../thumbnail/VolumeThumbnail';

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
	console.log(volume);

	return (
		<div className="volume-single">
			<VolumeHeader volume={volume} titleSize="large" authorsSize="medium" className="volume-single__header">
				{volume.volumeInfo.imageLinks.thumbnail && (
					<VolumeThumbnail
						size="auto"
						thumbnailUrl={volume.volumeInfo.imageLinks.thumbnail}
						className="volume-single__thumbnail"
					/>
				)}
			</VolumeHeader>

			<div className="volume-single__content">
				{volume.volumeInfo.description && <VolumeDescription description={volume.volumeInfo.description} />}

				<div className="volume-single__side">
					<VolumeEdition volume={volume} className="volume-single__edition" />

					{volume.volumeInfo.publisher && <VolumePublisher publisher={volume.volumeInfo.publisher} />}
				</div>
			</div>
		</div>
	);
}
