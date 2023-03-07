import Head from '@/components/head/head';
import Navigation from '@/components/navigation/navigation';
import Container from '@/components/ui/container';
import Logo from '@/components/ui/logo';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<>
			<Head
				title='Matt Pheobes - Photographer'
				description='Matt Pheobes is a professional photographer.'
			/>
			<header>
				<Container>
					<div className='flex items-center justify-between pt-12 pb-24'>
						<Logo />
						<Navigation />
					</div>
				</Container>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Container>
					<div className='mb-12 flex items-center justify-between rounded-md bg-woodsmoke-900 px-8 py-12 text-soft-amber-300'>
						<div>
							<p>Say hello!</p>
							<a href='mailto:hello@photography.com' className='underline underline-offset-4'>
								hello@photography.com
							</a>
						</div>
						<ul>
							<li>Instagram</li>
							<li>Facebook</li>
						</ul>
					</div>
				</Container>
			</footer>
		</>
	);
}
