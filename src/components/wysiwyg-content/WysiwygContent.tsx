import classNames from 'classnames';

import styles from './WysiwygContent.module.scss';

export interface WysiwygContentProps {
	content: string;
	className?: string;
}

export default function WysiwygContent({ content, className }: WysiwygContentProps) {
	return (
		<div
			className={classNames(styles.container, className)}
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		/>
	);
}
