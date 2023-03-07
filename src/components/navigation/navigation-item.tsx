import { NavLink } from 'react-router-dom';

type NavigationItem = {
	path: string;
	content: string;
};

export default function NavigationItem({ path, content }: NavigationItem) {
	return (
		<li>
			<NavLink
				className='rounded-full border border-woodsmoke-900 py-2 px-3 transition-colors hover:bg-woodsmoke-900 hover:text-soft-amber-300'
				to={path}
			>
				{content}
			</NavLink>
		</li>
	);
}
