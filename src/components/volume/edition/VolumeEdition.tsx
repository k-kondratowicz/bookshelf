import './VolumeEdition.scss';

import { VolumeFull } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';
import { parseIndustryIdentifiers } from '@/utils/parseIndustryIdentifiers';
import { parsePublishedDate } from '@/utils/parsePublishedDate';

import LinkButton from '../../link-button/LinkButton';
import VolumeInfoBox from '../info-box/VolumeInfoBox';

export interface VolumeEditionProps {
	volume: VolumeFull;
	className?: string;
}

export default function VolumeEdition({ volume, className }: VolumeEditionProps) {
	const { volumeInfo } = volume;

	return (
		<VolumeInfoBox title="About this edition" className={`volume-edition ${className ?? ''}`}>
			<dl className="volume-edition__details">
				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">ISBN:</dt>
					<dd className="volume-edition__details-value">{parseIndustryIdentifiers(volumeInfo.industryIdentifiers)}</dd>
				</div>

				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">Page Count:</dt>
					<dd className="volume-edition__details-value">{volumeInfo.pageCount || 'N/A'}</dd>
				</div>

				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">Published:</dt>
					<dd className="volume-edition__details-value">{parsePublishedDate(volumeInfo.publishedDate)}</dd>
				</div>

				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">Print Type:</dt>
					<dd className="volume-edition__details-value volume-edition__details-value--print-type">
						{volumeInfo.printType}
					</dd>
				</div>

				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">Publisher:</dt>
					<dd className="volume-edition__details-value">{volumeInfo.publisher || 'N/A'}</dd>
				</div>

				<div className="volume-edition__details-item">
					<dt className="volume-edition__details-key">Authors:</dt>
					<dd className="volume-edition__details-value">{parseAuthors(volume.volumeInfo.authors)}</dd>
				</div>
			</dl>
		</VolumeInfoBox>
	);
}
