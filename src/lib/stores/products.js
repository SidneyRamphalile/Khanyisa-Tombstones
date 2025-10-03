import { writable } from 'svelte/store';

export const products = writable([
	{
		id: '1',
		name: 'Classic Tombstone',
		description: 'High-quality granite tombstone.',
		price: 3500,
		image: '/images/products/classic.jpg' 
	},
	{
		id: '2',
		name: 'Premium Tombstone',
		description: 'Elegant design with engraving options.',
		price: 5500,
		image: '/images/products/premium.jpg' 
	}
]);
