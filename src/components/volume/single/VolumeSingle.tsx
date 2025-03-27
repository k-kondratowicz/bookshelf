import './VolumeSingle.scss';

import { useVolumeQuery } from '@/hooks/queries';

import VolumeEdition from '../edition/VolumeEdition';
import VolumeHeader from '../header/VolumeHeader';

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
		<div className="volume-single">
			<VolumeHeader volume={volume} titleSize="large" authorsSize="large" className="volume-single__header" />

			<VolumeEdition volume={volume} />
		</div>
	);
}
