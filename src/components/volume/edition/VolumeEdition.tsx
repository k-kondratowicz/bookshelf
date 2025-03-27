import './VolumeEdition.scss';

import { VolumeFull } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';
import { parseIndustryIdentifiers } from '@/utils/parseIndustryIdentifiers';
import { parsePublishedDate } from '@/utils/parsePublishedDate';

export interface VolumeEditionProps {
	volume: VolumeFull;
}

export default function VolumeEdition({ volume }: VolumeEditionProps) {
	const { volumeInfo } = volume;

	return (
		<div className="volume-edition">
			<h3 className="volume-edition__title">About this edition</h3>

			<div className="volume-edition__inner">
				<dl className="volume-edition__details">
					<div className="volume-edition__details-item">
						<dt className="volume-edition__details-key">ISBN:</dt>
						<dd className="volume-edition__details-value">
							{parseIndustryIdentifiers(volumeInfo.industryIdentifiers)}
						</dd>
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
			</div>
		</div>
	);
}
