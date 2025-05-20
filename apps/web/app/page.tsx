import { lazy } from 'react';
const CreateProduct = lazy(
	() => import('./create-product/create-product')
);
const Products = lazy(() => import('./products/products'));

export const dynamic = 'force-dynamic';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen space-y-5'>
			<CreateProduct />
			<Products />
		</div>
	);
};

export default Home;
