import BookshelfVolumes from '@/components/bookshelf-volumes/BookshelfVolumes';

export interface BookshelfPageProps {
	id: number;
	title: string;
}

export default function BookshelfPage({ id, title }: BookshelfPageProps) {
	return <BookshelfVolumes bookshelfId={id} title={title} />;
}
