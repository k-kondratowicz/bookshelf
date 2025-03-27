export interface VolumeImages {
	thumbnail: string;
	small?: string;
	medium?: string;
	large?: string;
	smallThumbnail?: string;
	extraLarge?: string;
}

export interface VolumeInfoSimple {
	title: string;
	authors?: string[];
	publishedDate?: string;
	imageLinks?: VolumeImages;
}

export interface VolumeSearchInfo {
	textSnippet?: string;
}

export interface VolumeSimple {
	kind: string;
	id: string;
	volumeInfo: VolumeInfoSimple;
	searchInfo?: VolumeSearchInfo;
}

export interface VolumeIndustryIdentifier {
	type: string;
	identifier: string;
}

export interface VolumeFull extends VolumeSimple {
	volumeInfo: VolumeInfoSimple & {
		publisher?: string;
		description?: string;
		pageCount: number;
		printType?: string;
		categories: string[];
		industryIdentifiers?: VolumeIndustryIdentifier[];
		language: string;
	};
}
