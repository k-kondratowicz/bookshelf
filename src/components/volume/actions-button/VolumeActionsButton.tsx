import './VolumeActionsButton.scss';

import Button from '@/components/button/Button';
import Dialog from '@/components/dialog/Dialog';
import VolumeActions from '@/components/volume/actions/VolumeActions';
import { VolumeSimple } from '@/types/volume';

export interface VolumeActionsButtonProps {
	volume: VolumeSimple;
}

export default function VolumeActionsButton({ volume }: VolumeActionsButtonProps) {
	return (
		<Dialog
			hideCloseButton
			triggerElement={({ open }) => (
				<Button theme="medium" onClick={open} className="volume-actions-button">
					⚙️
				</Button>
			)}>
			{({ close }) => <VolumeActions volume={volume} close={close} />}
		</Dialog>
	);
}
