import Button from '@/components/button/Button';
import Dialog from '@/components/dialog/Dialog';
import VolumeActions from '@/components/volume/actions/VolumeActions';
import { VolumeSimple } from '@/types/volume';

import styles from './VolumeActionsButton.module.scss';

export interface VolumeActionsButtonProps {
	volume: VolumeSimple;
}

export default function VolumeActionsButton({ volume }: VolumeActionsButtonProps) {
	return (
		<Dialog
			hideCloseButton
			triggerElement={({ open }) => (
				<Button theme="medium" onClick={open} className={styles.button}>
					⚙️
				</Button>
			)}
		>
			{({ close }) => <VolumeActions volume={volume} close={close} />}
		</Dialog>
	);
}
