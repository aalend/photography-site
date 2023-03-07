import Head from '@/components/head/head';
import Container from '@/components/ui/container';
import GalleryItem from './components/gallery-item';
import natureImg from '/assets/gallery-image-1.jpg';
import concertImg from '/assets/gallery-image-2.jpg';
import autoshowImg from '/assets/gallery-image-3.jpg';
import natureImg2 from '/assets/gallery-image-4.jpg';

export default function Gallery() {
	return (
		<>
			<Head title='Matt Pheobes - Gallery' description='Work gallery Matt Pheobes' />
			<section>
				<Container>
					<div className='mb-24 flex flex-col gap-8'>
						<h1 className='rounded-md bg-woodsmoke-900 px-8 py-12 text-4xl text-soft-amber-300'>
							Latest work
						</h1>
						<div className='grid grid-cols-[repeat(auto-fill,_minmax(min(300px,_100%),_1fr))] gap-3'>
							<GalleryItem image={natureImg} imageAlt={'nature project'} title={'nature'} />
							<GalleryItem image={concertImg} imageAlt={'concert project'} title={'Concert'} />
							<GalleryItem image={autoshowImg} imageAlt={'autoshow project'} title={'Auto Moto'} />
							<GalleryItem image={natureImg2} imageAlt={'nature project'} title={'nature'} />
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
