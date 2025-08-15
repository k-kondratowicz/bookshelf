import classNames from 'classnames';

import VolumeInfoBox from '@/components/volume/info-box/VolumeInfoBox';
import { VolumeFull } from '@/types/volume';
import { parseAuthors } from '@/utils/parseAuthors';
import { parseIndustryIdentifiers } from '@/utils/parseIndustryIdentifiers';
import { parsePublishedDate } from '@/utils/parsePublishedDate';

import styles from './VolumeEdition.module.scss';

export interface VolumeEditionProps {
	volume: VolumeFull;
	className?: string;
}

export default function VolumeEdition({ volume, className }: VolumeEditionProps) {
	const { volumeInfo } = volume;

	return (
		<VolumeInfoBox title="About this edition" className={classNames(className)}>
			<dl className={styles.details}>
				<div>
					<dt className={styles.detailsKey}>ISBN:</dt>
					<dd className={styles.detailsValue}>{parseIndustryIdentifiers(volumeInfo.industryIdentifiers)}</dd>
				</div>

				<div>
					<dt className={styles.detailsKey}>Page Count:</dt>
					<dd className={styles.detailsValue}>{volumeInfo.pageCount || 'N/A'}</dd>
				</div>

				<div>
					<dt className={styles.detailsKey}>Published:</dt>
					<dd className={styles.detailsValue}>{parsePublishedDate(volumeInfo.publishedDate)}</dd>
				</div>

				<div>
					<dt className={styles.detailsKey}>Print Type:</dt>
					<dd className={classNames(styles.detailsValue, styles.printType)}>{volumeInfo.printType}</dd>
				</div>

				<div>
					<dt className={styles.detailsKey}>Publisher:</dt>
					<dd className={styles.detailsValue}>{volumeInfo.publisher || 'N/A'}</dd>
				</div>

				<div>
					<dt className={styles.detailsKey}>Authors:</dt>
					<dd className={styles.detailsValue}>{parseAuthors(volume.volumeInfo.authors)}</dd>
				</div>
			</dl>
		</VolumeInfoBox>
	);
}
