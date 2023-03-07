import Head from '@/components/head/head';
import Container from '@/components/ui/container';

export default function Contact() {
	return (
		<>
			<Head title='Matt Pheobes - Contact me' description='Contact page Matt Pheobes' />

			<section>
				<Container>
					<div className='flex flex-col gap-12'>
						<h1 className='rounded-md bg-woodsmoke-900 px-8 py-12 text-4xl text-soft-amber-300'>
							Feel free to say hi!
						</h1>
						<form action='' className='mb-24 flex flex-col gap-8'>
							<div className='flex flex-col'>
								<label htmlFor='name'>name</label>
								<input
									id='name'
									type='text'
									className='rounded-md border border-woodsmoke-900 bg-soft-amber-300 p-4'
									placeholder='John Simmons'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='email'>email</label>
								<input
									id='email'
									type='text'
									className='rounded-md border border-woodsmoke-900 bg-soft-amber-300 p-4'
									placeholder='johnsimmons@gmail.com'
								/>
							</div>
							<div className='flex flex-col'>
								<label htmlFor='message'>Message</label>
								<textarea
									name='message'
									id='message'
									cols={30}
									rows={10}
									className='rounded-md border border-woodsmoke-900 bg-soft-amber-300 p-4'
									placeholder='Hi, your message goes here!'
								/>
							</div>
							<button
								type='submit'
								className='rounded-md   bg-woodsmoke-900 p-4 text-soft-amber-300'
							>
								send email
							</button>
						</form>
					</div>
				</Container>
			</section>
		</>
	);
}
