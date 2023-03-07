import Container from '@/components/ui/container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import hero from '/assets/img-hero-1.webp';

export default function Layout() {
	return (
		<>
			<section>
				<Container>
					<div className='pb-24'>
						<div className='mb-12'>
							<h1 className='mb-8 flex w-full justify-between text-3xl transition-all sm:text-6xl md:text-7xl lg:text-8xl'>
								<span>C</span>
								<span>A</span>
								<span>P</span>
								<span>T</span>
								<span>U</span>
								<span>R</span>
								<span>I</span>
								<span>N</span>
								<span>G</span>
							</h1>
							<p className='text-full-width font-grunge text-xl sm:text-2xl'>
								The moments that captivate your heart
							</p>
						</div>
						<div className='flex flex-col-reverse gap-3 md:flex-row'>
							<div className='flex basis-1/3 flex-col justify-between gap-8 rounded-md bg-woodsmoke-900 p-6 text-soft-amber-300'>
								<p className='text-justify text-2xl'>
									Matt is a professional photographer with a keen eye for capturing the beauty in
									the world around him. His skillful use of lighting and composition results in
									stunning and captivating images that tell a story and evoke emotion. With years
									of experience in the industry, Matt has honed his craft to perfection and is
									sought after for his expertise and creativity. His passion for photography is
									infectious, and his work inspires others to see the world in a new and beautiful
									way.
								</p>
								<Link
									to={'/about'}
									className='font-grunge hover:underline hover:underline-offset-4'
								>
									About me
								</Link>
							</div>
							<div className='basis-2/3'>
								<LazyLoadImage
									className='aspect-square h-full w-full rounded-md object-cover'
									src={hero}
									alt={'Julius Simmmons'}
									width={600}
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
