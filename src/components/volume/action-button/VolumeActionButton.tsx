import './VolumeActionButton.scss';

import Button from '@/components/button/Button';
import { VolumeSimple } from '@/types/volume';

export interface VolumeActionButtonProps {
	volume: VolumeSimple;
}

export default function VolumeActionButton(props: VolumeActionButtonProps) {
	return (
		<Button theme="medium" className="volume-action-button">
			⚙️
		</Button>
	);
}
