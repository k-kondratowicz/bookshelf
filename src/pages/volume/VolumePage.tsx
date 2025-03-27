import { useParams } from 'react-router';

import VolumeSingle from '@/components/volume/single/VolumeSingle';

export default function VolumePage() {
	const { volumeId } = useParams();

	return <VolumeSingle volumeId={volumeId} />;
}
