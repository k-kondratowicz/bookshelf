import VolumeInfoBox from '@/components/volume/info-box/VolumeInfoBox';
import WysiwygContent from '@/components/wysiwyg-content/WysiwygContent';

import styles from './VolumeDescription.module.scss';

export interface VolumeDescriptionProps {
	description: string;
}

export default function VolumeDescription({ description }: VolumeDescriptionProps) {
	return (
		<VolumeInfoBox title="Description" className={styles.container}>
			<WysiwygContent content={description} />
		</VolumeInfoBox>
	);
}
