import './VolumesWrapper.scss';

import { ReactNode } from 'react';

import VolumesTable from '@/components/volumes-table/VolumesTable';
import { VolumeSimple } from '@/types/volume';

export interface VolumesWrapperProps {
	title?: string;
	subtitle?: string;
	isDataPending?: boolean;
	data?: VolumeSimple[];
	children?: ReactNode;
}

export default function VolumesWrapper({ title, subtitle, isDataPending, data, children }: VolumesWrapperProps) {
	if (isDataPending) {
		// todo: add skeleton loader
		return <div>Loading...</div>;
	}

	if (!data) {
		// todo: add error state
		return null;
	}

	return (
		<div className="volumes-wrapper">
			{title && <h2 className="volumes-wrapper__title">{title}</h2>}

			{subtitle && <p className="volumes-wrapper__subtitle">{subtitle}</p>}

			<VolumesTable data={data} />

			{children}
		</div>
	);
}
