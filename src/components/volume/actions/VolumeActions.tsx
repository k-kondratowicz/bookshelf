import { ChangeEvent, useRef } from 'react';
import { toast } from 'react-toastify';

import Button from '@/components/button/Button';
import { NAV_LINKS } from '@/constants/nav';
import { useVolumeActions } from '@/hooks/volume/useVolumeActions';
import { VolumeSimple } from '@/types/volume';

import styles from './VolumeActions.module.scss';

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
			toast.success('Failed to move volume');
			console.error(err);

			return;
		}

		toast.success('Volume moved successfully');
		close?.();
	}

	async function handleAddToFav() {
		if (isAnyActionPending) {
			return;
		}

		const [err] = await addToFavourite();

		if (err) {
			toast.error('Failed to add volume to favorites');
			console.error(err);

			return;
		}

		toast.success('Volume added to favorites');
	}

	return (
		<div>
			<h3 className={styles.heading}>Move to...</h3>

			{MOVE_TO_ACTIONS.map(action => (
				<div key={action.id}>
					<label className={styles.bookshelfItem}>
						<input type="radio" name="bookshelf" value={action.id} onChange={handleRadioChange} />

						<span>{action.label}</span>
					</label>
				</div>
			))}

			<div className={styles.buttons}>
				<Button theme="medium" className={styles.fav} onClick={handleAddToFav} loading={isAnyActionPending}>
					❤️
					<span className="visually-hidden">Add to favorites</span>
				</Button>

				{close && (
					<Button theme="medium" onClick={close} disabled={isAnyActionPending}>
						Cancel
					</Button>
				)}

				<Button
					theme="light"
					disabled={!selectedBookshelf}
					className={styles.save}
					onClick={handleMoveVolume}
					loading={isAnyActionPending}
				>
					Save
				</Button>
			</div>
		</div>
	);
}
