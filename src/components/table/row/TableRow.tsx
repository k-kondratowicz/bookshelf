import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './TableRow.module.scss';

export interface TableRowProps extends Required<PropsWithChildren> {
	className?: string;
}

export default function TableRow({ className, children }: TableRowProps) {
	return (
		<div role="row" className={classNames(styles.row, className)}>
			{children}
		</div>
	);
}
