import './VolumeActionsButton.scss';

import Button from '@/components/button/Button';
import { VolumeSimple } from '@/types/volume';

import Dialog from '../../dialog/Dialog';
import VolumeActions from '../actions/VolumeActions';

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
