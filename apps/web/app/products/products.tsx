import { Product } from '@repo/types';

const Products = async () => {
	const response = await fetch(`${process.env.API_URL}/products`, {
		next: {
			tags: ['products']
		}
	});

	const products: Product[] = await response.json();

	return (
		<div className='bg-sky-700/30 p-5 w-sm space-y-5'>
			<h1 className='font-semibold text-center'>Products</h1>
			<div className='space-y-5'>
				{products.length ? (
					products.map(product => (
						<div key={product.id}>
							<p>Name: {product.name}</p>
							<p>Price: {product.price}</p>
						</div>
					))
				) : (
					<p className='text-center w-full text-red-300'>
						Add some products
					</p>
				)}
			</div>
		</div>
	);
};

export default Products;
