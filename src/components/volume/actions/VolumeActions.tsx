import './VolumeActions.scss';

import to from 'await-to-js';
import { ChangeEvent, useState } from 'react';

import Button from '@/components/button/Button';
import { NAV_LINKS } from '@/constants/nav';
import { useAddToFavMutation, useMoveVolumeMutation } from '@/hooks/queries/mutations';
import { VolumeSimple } from '@/types/volume';

export interface VolumeActionsProps {
	volume: VolumeSimple;
	close?: () => void;
}

const MOVE_TO_ACTIONS = NAV_LINKS.filter(link => link.id !== undefined && link.id !== 0);

// todo: single responsibility principle

export default function VolumeActions({ volume, close }: VolumeActionsProps) {
	const moveToMutation = useMoveVolumeMutation();
	const addToFavMutation = useAddToFavMutation();
	const [selectedBookshelf, setSelectedBookshelf] = useState<string>();

	const isActionPending = moveToMutation.isPending || addToFavMutation.isPending;

	function handleRadioChange(e: ChangeEvent<HTMLInputElement>) {
		setSelectedBookshelf(e.target.value);
	}

	async function handleMoveVolume() {
		if (!selectedBookshelf || isActionPending) {
			return;
		}

		const [err] = await to(
			moveToMutation.mutateAsync({
				volumeId: volume.id,
				bookshelfId: selectedBookshelf,
			}),
		);

		if (err) {
			// todo: show error message
			console.error(err);

			return;
		}

		// todo: show success message

		close?.();
	}

	async function handleAddToFav() {
		if (isActionPending) {
			return;
		}

		const [err] = await to(
			addToFavMutation.mutateAsync({
				volumeId: volume.id,
			}),
		);

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
				<Button theme="medium" className="volume-actions__fav" onClick={handleAddToFav} loading={isActionPending}>
					❤️
					<span className="visually-hidden">Add to favorites</span>
				</Button>

				{close && (
					<Button theme="medium" onClick={close} className="volume-actions__cancel" disabled={isActionPending}>
						Cancel
					</Button>
				)}

				<Button
					theme="light"
					disabled={!selectedBookshelf}
					className="volume-actions__save"
					onClick={handleMoveVolume}
					loading={isActionPending}
				>
					Save
				</Button>
			</div>
		</div>
	);
}
