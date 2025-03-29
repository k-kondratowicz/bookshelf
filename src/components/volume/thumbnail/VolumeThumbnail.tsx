import './VolumeThumbnail.scss';

export interface VolumeThumbnailProps {
	thumbnailUrl: string;
	size?: 'auto' | 'default';
	className?: string;
}

export default function VolumeThumbnail({ thumbnailUrl, size = 'default', className }: VolumeThumbnailProps) {
	return (
		<div className={`volume-thumbnail volume-thumbnail--size-${size} ${className || ''}`}>
			<img src={thumbnailUrl} alt="" className="volume-thumbnail__image" loading="lazy" />
		</div>
	);
}
