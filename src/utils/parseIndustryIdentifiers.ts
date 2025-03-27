import { VolumeIndustryIdentifier } from '@/types/volume';

export function parseIndustryIdentifiers(identifiers?: VolumeIndustryIdentifier[]) {
	if (!identifiers || identifiers.length === 0) {
		return 'N/A';
	}

	return identifiers
		.map(({ identifier }) => {
			return identifier;
		})
		.join(', ');
}
