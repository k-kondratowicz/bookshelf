import LinkButton from '@/components/link-button/LinkButton';
import VolumeInfoBox from '@/components/volume/info-box/VolumeInfoBox';

import styles from './VolumePublisher.module.scss';

export interface VolumePublisherProps {
	publisher: string;
}

export default function VolumePublisher({ publisher }: VolumePublisherProps) {
	return (
		<VolumeInfoBox title="Publisher">
			<p className={styles.name}>{publisher}</p>

			<LinkButton to={`/search?q=inpublisher:${encodeURIComponent(publisher)}`} theme="medium">
				Search {publisher}
			</LinkButton>
		</VolumeInfoBox>
	);
}
