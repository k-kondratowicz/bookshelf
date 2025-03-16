import VolumesTable from '@/components/volumes-table/VolumesTable';

export interface BookshelfPageProps {
	id: number;
	title: string;
}

export default function BookshelfPage({ id, title }: BookshelfPageProps) {
	return <VolumesTable bookshelfId={id} page={1} maxResults={10} title={title} />;
}
