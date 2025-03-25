import './LoaderSpinner.scss';

import classNames from 'classnames';

export interface LoaderSpinnerProps {
	className?: string;
}

export default function LoaderSpinner({ className }: LoaderSpinnerProps) {
	return <div className={classNames('loader-spinner', className)}></div>;
}
