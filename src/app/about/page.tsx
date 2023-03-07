import Head from '@/components/head/head';
import Container from '@/components/ui/container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import hero from '/assets/img-hero-1.webp';

export default function About() {
	return (
		<>
			<Head title='Matt Pheobes - About me' description='About page Matt Pheobes' />
			<section>
				<Container>
					<div className='mb-24 flex flex-col gap-8'>
						<h1 className='rounded-md bg-woodsmoke-900 px-8 py-12 text-4xl text-soft-amber-300'>
							Story about me
						</h1>
						<p>
							Matt is a highly skilled and experienced professional photographer who has spent
							years perfecting his craft. With an innate talent for capturing the beauty in the
							world around him, Matt's photography is truly breathtaking. He is a master at using
							lighting and composition to create stunning images that are both captivating and
							emotionally resonant. Matt's portfolio is filled with a diverse range of work, from
							awe-inspiring landscapes to intimate portraits. He has a unique ability to capture
							the essence of his subjects, whether it's the grandeur of a sweeping vista or the
							subtleties of a facial expression. His photographs are more than just pictures; they
							tell a story, evoke emotion, and invite the viewer to see the world through his eyes.
							One of Matt's greatest strengths is his ability to connect with his subjects, making
							them feel comfortable and at ease in front of the camera. This allows him to capture
							genuine and authentic moments that are both beautiful and meaningful. Whether he's
							photographing a couple on their wedding day or a family in their home, Matt has a
							talent for finding the essence of each individual and bringing it to life in his
							images. In addition to his technical expertise, Matt is known for his creativity and
							innovative approach to photography. He is constantly pushing the boundaries of what's
							possible, experimenting with new techniques and styles to create images that are
							fresh and exciting. His passion for photography is infectious, and his clients often
							comment on his enthusiasm and positive energy on set. Overall, Matt is a true artist
							and professional in every sense of the word. His dedication to his craft, coupled
							with his talent and creativity, make him one of the most sought-after photographers
							in the industry. Whether you're looking for stunning landscape photography, intimate
							portraits, or anything in between, Matt is the perfect choice to bring your vision to
							life.
						</p>
						<div>
							<LazyLoadImage
								className='aspect-square h-full w-full rounded-md object-cover'
								src={hero}
								alt={'Julius Simmmons'}
								width={600}
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
