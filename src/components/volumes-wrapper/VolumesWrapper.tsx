import './VolumesWrapper.scss';

import { ReactNode } from 'react';

import VolumesTable from '@/components/volumes-table/VolumesTable';
import { VolumeSimple } from '@/types/volume';

import VolumesTableSkeleton from '../skeletons/VolumesTableSkeleton';

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
		<div className="volumes-wrapper">
			{title && <h2 className="volumes-wrapper__title">{title}</h2>}

			{subtitle && <p className="volumes-wrapper__subtitle">{subtitle}</p>}

			{isDataPending && <VolumesTableSkeleton rows={maxResults} />}
			{!isDataPending && data && <VolumesTable data={data} />}
			{!isDataPending && !data?.length && <p className="volumes-wrapper__empty">No volumes found.</p>}

			{children}
		</div>
	);
}
