import { NavLink } from 'react-router-dom';
import NavigationItem from './navigation-item';

export default function Navigation() {
	return (
		<nav id='primary' aria-label={'primary navigation'}>
			<ul className='flex gap-3'>
				<NavigationItem path='/' content='Home' />
				<NavigationItem path='/about' content='About' />
				<NavigationItem path='/gallery' content='Gallery' />
				<NavigationItem path='/contact' content='Contact' />
			</ul>
		</nav>
	);
}
