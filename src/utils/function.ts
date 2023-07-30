import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			alert('Copied to clipboard');
		})
		.catch((err) => {
			alert('Failed to copy');
		});
}
