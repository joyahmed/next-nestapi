import React from 'react';
import { createProduct } from './actions/crete-product';

const CreateProduct = async () => {
	return (
		<form
			action={createProduct}
			className='shadow p-5 space-y-7 bg-sky-900/30 backdrop-blur-sm w-sm rounded-md'
		>
			<div className='flex flex-col gap-y-2'>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					id='name'
					className='border rounded p-2'
				/>
			</div>
			<div className='flex flex-col gap-y-2'>
				<label htmlFor='price'>Price:</label>
				<input
					type='number'
					name='price'
					id='price'
					className='border rounded p-2'
				/>
			</div>
			<button
				type='submit'
				className='p-2 text-center w-full border-[1px] bg-sky-600 hover:bg-sky-700 font-bold rounded'
			>
				Create Product
			</button>
		</form>
	);
};

export default CreateProduct;
