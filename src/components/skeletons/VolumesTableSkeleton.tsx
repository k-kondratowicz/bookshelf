import { DefaultSkeleton } from './DefaultSkeleton';

export interface VolumesTableSkeletonProps {
	rows?: number;
}

export default function VolumesTableSkeleton({ rows = 10 }: VolumesTableSkeletonProps) {
	return (
		<div className="volumes-table-skeleton">
			<DefaultSkeleton height={`1.8rem`} width={`100%`} style={{ marginBottom: '1rem' }} />
			<DefaultSkeleton count={rows} height={`6.4rem`} width={`100%`} style={{ marginBottom: '0.2rem' }} />
		</div>
	);
}
