import './WysiwygContent.scss';

export interface WysiwygContentProps {
	content: string;
	className?: string;
}

export default function WysiwygContent({ content, className }: WysiwygContentProps) {
	return (
		<div
			className={`wysiwyg-content ${className ?? ''}`}
			dangerouslySetInnerHTML={{
				__html: content,
			}}
		/>
	);
}
