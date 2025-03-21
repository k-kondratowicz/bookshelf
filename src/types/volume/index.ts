export interface VolumeInfoSimple {
	title: string;
	authors?: string[];
	publishedDate?: string;
	imageLinks?: {
		thumbnail: string;
	};
}

export interface VolumeSimple {
	kind: string;
	id: string;
	volumeInfo: VolumeInfoSimple;
}

export interface VolumeFull extends VolumeSimple {
	volumeInfo: VolumeInfoSimple & {
		publisher: string;
		description: string;
		pageCount: number;
		printType: string;
		categories: string[];
		industryIdentifiers: {
			type: string;
			identifier: string;
		}[];
		language: string;
	};
}
