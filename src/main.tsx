import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './app/about/page';
import Contact from './app/contact/page';
import Gallery from './app/gallery/page';
import RootLayout from './app/layouts/root-layout';
import Layout from './app/page';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Layout /> },
			{
				children: [
					{
						path: 'about/',
						element: <About />,
					},
					{
						path: 'gallery/',
						element: <Gallery />,
					},
					{
						path: 'contact/',
						element: <Contact />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</React.StrictMode>
);
