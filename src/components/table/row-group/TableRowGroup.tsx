import './TableRowGroup.scss';

import { ReactNode } from 'react';

export interface TableRowGroupProps {
	children: ReactNode;
	header?: boolean;
	className?: boolean;
}

export default function TableRowGroup(props: TableRowGroupProps) {
	return (
		<div
			role="rowgroup"
			className={`table-row-group table-row-group--${props.header ? 'head' : 'default'} ${props.className ?? ''}`}>
			{props.children}
		</div>
	);
}
