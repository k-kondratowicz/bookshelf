import './TableCell.scss';

import { ReactNode } from 'react';

export interface TableCellProps {
	children: ReactNode;
	header?: boolean;
	size?: number;
	className?: string;
}

export default function TableCell(props: TableCellProps) {
	return (
		<div
			role={props.header ? 'columnheader' : 'cell'}
			className={`table-cell table-cell--${props.header ? 'head' : 'default'} ${props.className ?? ''}`}
			aria-sort="none">
			{props.children}
		</div>
	);
}
