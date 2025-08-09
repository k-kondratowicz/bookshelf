import './VolumeActions.scss';

import { ChangeEvent, useRef } from 'react';

import Button from '@/components/button/Button';
import { NAV_LINKS } from '@/constants/nav';
import { useVolumeActions } from '@/hooks/volume/useVolumeActions';
import { VolumeSimple } from '@/types/volume';

export interface VolumeActionsProps {
	volume: VolumeSimple;
	close?: () => void;
}

const MOVE_TO_ACTIONS = NAV_LINKS.filter(link => link.id !== undefined && link.id !== 0);

export default function VolumeActions({ volume, close }: VolumeActionsProps) {
	const selectedBookshelf = useRef<string>(null);

	const { isAnyActionPending, moveVolume, addToFavourite } = useVolumeActions(volume.id);

	function handleRadioChange(e: ChangeEvent<HTMLInputElement>) {
		selectedBookshelf.current = e.target.value;
	}

	async function handleMoveVolume() {
		if (!selectedBookshelf.current || isAnyActionPending) {
			return;
		}

		const [err] = await moveVolume(selectedBookshelf.current);

		if (err) {
			// todo: show error message
			console.error(err);

			return;
		}

		// todo: show success message

		close?.();
	}

	async function handleAddToFav() {
		if (isAnyActionPending) {
			return;
		}

		const [err] = await addToFavourite();

		if (err) {
			// todo: show error message
			console.error(err);

			return;
		}

		// todo: show success message
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
				<Button theme="medium" className="volume-actions__fav" onClick={handleAddToFav} loading={isAnyActionPending}>
					❤️
					<span className="visually-hidden">Add to favorites</span>
				</Button>

				{close && (
					<Button theme="medium" onClick={close} className="volume-actions__cancel" disabled={isAnyActionPending}>
						Cancel
					</Button>
				)}

				<Button
					theme="light"
					disabled={!selectedBookshelf}
					className="volume-actions__save"
					onClick={handleMoveVolume}
					loading={isAnyActionPending}
				>
					Save
				</Button>
			</div>
		</div>
	);
}
