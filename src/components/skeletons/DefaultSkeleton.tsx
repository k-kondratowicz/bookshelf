import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

export function DefaultSkeleton(props?: SkeletonProps) {
	return <Skeleton {...(props || {})} baseColor="#191c20" highlightColor="#373c44" />;
}
