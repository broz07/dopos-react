import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'DOPOSHK s.r.o.',
		short_name: 'DOPOSHK s.r.o.',
		description: '',
		start_url: '/',
		display: 'standalone',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
				purpose: 'maskable',
			},
		],
	};
}
