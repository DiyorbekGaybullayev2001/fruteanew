import { Link, Outlet } from 'react-router'

export const MainLayout = () => {
	return (
		<div className='flex justify-center '>
			<div className='mt-20 ml-5 text-xl font-medium flex-col flex gap-5 w-[400px]'>
				<Link className='text-lg text-gray-600 underline' to={"/"}>Bosh sahifa</Link>
				<Link to={'choy'}>Choy</Link>
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	)
}
