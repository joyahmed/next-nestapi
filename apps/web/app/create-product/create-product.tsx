import React from 'react';

const CreateProduct = async () => {
	return (
		<div className='flex items-center justify-center min-h-screen w-screen'>
			<form action='' className='border p-5'>
				<div className='flex flex-col'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						className='border rounded p-2'
					/>
				</div>
				<div className='flex flex-col'>
					<label htmlFor='price'>Price:</label>
					<input
						type='number'
						name='number'
						id='number'
						className='border rounded p-2'
					/>
				</div>
				<button type='submit'></button>
			</form>
		</div>
	);
};

export default CreateProduct;
