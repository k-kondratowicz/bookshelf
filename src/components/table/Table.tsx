import './Table.scss';

import { ReactNode } from 'react';

import TableCell from './cell/TableCell';
import TableRow from './row/TableRow';
import TableRowGroup from './row-group/TableRowGroup';

export interface TableColumnProps<T> {
	key: string;
	title: string;
	selector: (row: T, rowIndex: number) => ReactNode;
}

export interface TableProps<T> {
	columns: TableColumnProps<T>[];
	data: T[];
	layout: string;
}

export default function Table<T>(props: TableProps<T>) {
	const style = {
		'--table-layout': props.layout,
	};

	return (
		<div role="table" className="table" style={style}>
			<TableRowGroup header>
				<TableRow>
					{props.columns.map(column => (
						<TableCell header key={`${column.key}-head`}>
							{column.title}
						</TableCell>
					))}
				</TableRow>
			</TableRowGroup>

			<TableRowGroup>
				{props.data.map((row: T, index: number) => (
					<TableRow key={index}>
						{props.columns.map(column => (
							<TableCell key={`${column.key}-body`}>{column.selector(row, index)}</TableCell>
						))}
					</TableRow>
				))}
			</TableRowGroup>
		</div>
	);
}
