import './VolumeDescription.scss';

import WysiwygContent from '@/components/wysiwyg-content/WysiwygContent';

import VolumeInfoBox from '../info-box/VolumeInfoBox';

export interface VolumeDescriptionProps {
	description: string;
}

export default function VolumeDescription({ description }: VolumeDescriptionProps) {
	return (
		<VolumeInfoBox title="Description" className="volume-description">
			<WysiwygContent content={description} />
		</VolumeInfoBox>
	);
}
