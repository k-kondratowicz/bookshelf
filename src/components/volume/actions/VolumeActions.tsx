import './VolumeActions.scss';

import { useState } from 'react';

import { NAV_LINKS } from '@/constants/nav';
import { VolumeFull, VolumeSimple } from '@/types/volume';

import Button from '../../button/Button';

export interface VolumeActionsProps {
	volume: VolumeSimple | VolumeFull;
	close: () => void;
}

const MOVE_TO_ACTIONS = NAV_LINKS.filter(link => link.id !== undefined && link.id !== 0);

export default function VolumeActions({ volume, close }: VolumeActionsProps) {
	const [selectedBookshelf, setSelectedBookshelf] = useState<string | undefined>();

	function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSelectedBookshelf(e.target.value);
	}

	return (
		<div className="volume-actions">
			<h3 className="volume-actions__heading">Move to...</h3>

			{MOVE_TO_ACTIONS.map(action => (
				<div key={action.id}>
					<label className="volume-actions__bookshelf-item">
						<input type="radio" name="bookshelf" value={action.id} onChange={handleRadioChange} />

						<span>{action.label}</span>
					</label>
				</div>
			))}

			<div className="volume-actions__buttons">
				<Button theme="medium" className="volume-actions__fav">
					❤️
				</Button>

				<Button theme="medium" onClick={close} className="volume-actions__cancel">
					Cancel
				</Button>

				<Button theme="light" disabled={!selectedBookshelf} className="volume-actions__save">
					Save
				</Button>
			</div>
		</div>
	);
}
