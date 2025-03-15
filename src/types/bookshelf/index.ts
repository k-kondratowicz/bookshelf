import { VolumeSimple } from '../volume';

export interface BookshelfVolumes {
	kind: string;
	totalItems: number;
	items?: VolumeSimple[];
}
