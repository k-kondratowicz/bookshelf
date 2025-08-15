import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './TableCell.module.scss';

export interface TableCellProps extends Required<PropsWithChildren> {
	header?: boolean;
	className?: string;
}

export default function TableCell({ header, className, children }: TableCellProps) {
	return (
		<div
			role={header ? 'columnheader' : 'cell'}
			className={classNames(styles.cell, styles?.[header ? 'head' : 'default'], className)}
			aria-sort="none"
		>
			{children}
		</div>
	);
}
