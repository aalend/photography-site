import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

type GalleryItem = {
	image: string;
	imageAlt: string;
	title: string;
};

export default function GalleryItem({ image, imageAlt, title }: GalleryItem) {
	return (
		<Link to={'/'} className='group relative'>
			<LazyLoadImage
				className='aspect-square h-full w-full rounded-md object-cover transition-all group-hover:cursor-pointer group-hover:blur-sm'
				src={image}
				alt={imageAlt}
				width={600}
			/>
			<h2 className='absolute top-2/4 left-2/4 hidden -translate-x-2/4 transform transition-all group-hover:block group-hover:text-soft-amber-300'>
				{title}
			</h2>
		</Link>
	);
}
