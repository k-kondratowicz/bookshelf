import './VolumeActionButton.scss';

import Button from '@/components/button/Button';
import { VolumeSimple } from '@/types/volume';

import Dialog from '../../dialog/Dialog';

export interface VolumeActionButtonProps {
	volume: VolumeSimple;
}

export default function VolumeActionButton({ volume }: VolumeActionButtonProps) {
	return (
		<Dialog
			hideCloseButton
			triggerElement={({ open }) => (
				<Button theme="medium" onClick={open} className="volume-action-button">
					⚙️
				</Button>
			)}>
			{/* todo: add volume actions */}
			Actions
		</Dialog>
	);
}
