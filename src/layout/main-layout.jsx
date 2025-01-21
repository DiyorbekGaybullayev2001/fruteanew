import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<div className='flex flex-col justify-center'>
			<nav className='mt-20 ml-5 text-xl font-medium'>
				<Link to='/products/choy' className='text-green-600 hover:underline'>
					Choy
				</Link>
			</nav>
			<main className='mt-10'>
				<Outlet />
			</main>
		</div>
	);
};
