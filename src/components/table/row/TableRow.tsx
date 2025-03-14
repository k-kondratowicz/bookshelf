import './TableRow.scss';

import { PropsWithChildren } from 'react';

export interface TableRowProps extends Required<PropsWithChildren> {
	className?: string;
}

export default function TableRow(props: TableRowProps) {
	return (
		<div role="row" className={`table-row ${props.className ?? ''}`}>
			{props.children}
		</div>
	);
}
