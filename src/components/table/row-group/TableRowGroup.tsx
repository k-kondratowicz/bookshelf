import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './TableRowGroup.module.scss';

export interface TableRowGroupProps extends Required<PropsWithChildren> {
	header?: boolean;
	className?: string;
}

export default function TableRowGroup({ header, children, className }: TableRowGroupProps) {
	return (
		<div role="rowgroup" className={classNames(styles.rowGroup, styles?.[header ? 'head' : 'default'], className)}>
			{children}
		</div>
	);
}
