import './VolumeThumbnail.scss';

export interface VolumeThumbnailProps {
	thumbnailUrl: string;
	className?: string;
}

export default function VolumeThumbnail({ thumbnailUrl, className }: VolumeThumbnailProps) {
	return (
		<div className={`volume-thumbnail ${className || ''}`}>
			<img src={thumbnailUrl} alt="" className="volume-thumbnail__image" loading="lazy" />
		</div>
	);
}
