import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type HeadProps = {
	title?: string;
	description?: string;
	children?: ReactNode;
};

export default function Head({ title, description, children }: HeadProps) {
	return (
		<>
			<Helmet title={title ?? 'Photography'}>
				<meta name='description' content={description ?? 'Photography Website'} />
				<meta
					name='keywords'
					content='photography, photography studio, best camera for photography, nature photography, food photography'
				/>
				{children}
			</Helmet>
		</>
	);
}
