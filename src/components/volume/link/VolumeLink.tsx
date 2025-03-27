import './VolumeLink.scss';

import { Link } from 'react-router';

import { VolumeFull, VolumeSimple } from '@/types/volume';

import VolumeHeader from '../header/VolumeHeader';
import VolumeThumbnail from '../thumbnail/VolumeThumbnail';

export interface VolumeLinkProps {
	volume: VolumeSimple | VolumeFull;
	className?: string;
}

export default function VolumeLink({ volume, className }: VolumeLinkProps) {
	const { imageLinks } = volume.volumeInfo;

	return (
		<Link to={`/volume/${volume.id}`} className={`volume-link ${className || ''}`}>
			{imageLinks && <VolumeThumbnail className="volume-link__visual" thumbnailUrl={imageLinks.thumbnail} />}

			<VolumeHeader volume={volume} className="volume-link__info" />
		</Link>
	);
}
