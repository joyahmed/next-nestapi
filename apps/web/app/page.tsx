import { Gradient } from '@repo/ui/gradient';
import { lazy } from 'react';
const CreateProduct = lazy(
	() => import('./create-product/create-product')
);
const Products = lazy(() => import('./products/products'));

export const dynamic = 'force-dynamic';

const Home = () => {
	return (
		<div className='relative flex flex-col items-center justify-center w-screen h-screen space-y-5'>
			<Gradient
				className='top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]'
				conic
			/>
			<CreateProduct />
			<Products />
		</div>
	);
};

export default Home;
