import './VolumeHeader.scss';

import { Link } from 'react-router';

import { VolumeSimple } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';

export interface VolumeHeaderProps {
	volume: VolumeSimple;
}

export default function VolumeHeader({ volume }: VolumeHeaderProps) {
	const { imageLinks, title, authors } = volume.volumeInfo;

	return (
		<Link to={`/volume/${volume.id}`} className="volume-header">
			<div className="volume-header__visual">
				<img src={imageLinks.thumbnail} alt="" className="volume-header__thumbnail" />
			</div>

			<div className="volume-header__info">
				<h2 className="volume-header__title">{title}</h2>
				<div className="volume-header__authors">{parseAuthors(authors)}</div>
			</div>
		</Link>
	);
}
