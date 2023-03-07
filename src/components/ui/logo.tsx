import logo from '/assets/logo.png';

export default function Logo() {
	return (
		<div className='flex items-center gap-3'>
			<img src={logo} alt='Photography' className='aspect-square w-8' />
			<span className='font-nunito text-xl font-black leading-none'>Photography</span>
		</div>
	);
}
