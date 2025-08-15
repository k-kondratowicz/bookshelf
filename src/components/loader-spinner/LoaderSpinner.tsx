import classNames from 'classnames';

import styles from './LoaderSpinner.module.scss';

export interface LoaderSpinnerProps {
	className?: string;
}

export default function LoaderSpinner({ className }: LoaderSpinnerProps) {
	return <div className={classNames(styles.spinner, className)}></div>;
}
