import { ReactNode } from 'react';

import VolumesTableSkeleton from '@/components/skeletons/VolumesTableSkeleton';
import VolumesTable from '@/components/volumes-table/VolumesTable';
import { VolumeSimple } from '@/types/volume';

import styles from './VolumesWrapper.module.scss';

export interface VolumesWrapperProps {
	title?: string;
	subtitle?: string;
	isDataPending?: boolean;
	data?: VolumeSimple[];
	children?: ReactNode;
	maxResults?: number;
}

export default function VolumesWrapper({
	title,
	subtitle,
	isDataPending,
	data,
	children,
	maxResults,
}: VolumesWrapperProps) {
	return (
		<div>
			{title && <h2 className={styles.title}>{title}</h2>}

			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}

			{isDataPending && <VolumesTableSkeleton rows={maxResults} />}
			{!isDataPending && data && <VolumesTable data={data} />}
			{!isDataPending && !data?.length && <p>No volumes found.</p>}

			{children}
		</div>
	);
}
