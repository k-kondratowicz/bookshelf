import './VolumePublisher.scss';

import LinkButton from '../../link-button/LinkButton';
import VolumeInfoBox from '../info-box/VolumeInfoBox';

export interface VolumePublisherProps {
	publisher: string;
}

export default function VolumePublisher({ publisher }: VolumePublisherProps) {
	return (
		<VolumeInfoBox title="Publisher" className="volume-publisher">
			<p className="volume-publisher__name">{publisher}</p>

			<LinkButton to={`/search?q=inpublisher:${encodeURIComponent(publisher)}`} theme="medium">
				Search {publisher}
			</LinkButton>
		</VolumeInfoBox>
	);
}
