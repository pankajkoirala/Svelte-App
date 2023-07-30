/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx,svelte}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,svelte}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,svelte}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx,svelte}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				'regular-font': ['"Press Start 2P"', 'cursive']
			},
			colors: {
				// brand
				'brand-primary': '#7A5AF8',
				'brand-secondary': '#EBE9FE',
				brand25: '#FAFAFF',
				brand50: '#F4F3FF',
				brand100: '#EBE9FE',
				brand200: '#D9D6FE',
				brand300: '#BDB4FE',
				brand400: '#9B8AFB',
				brand500: '#7A5AF8',
				brand600: '#6938EF',
				brand700: '#5925DC',
				brand800: '#4A1FB8',
				brand900: '#3E1C96',

				secondary: 'blue',
				// text
				'text-primary': '#1E293B',
				'text-secondary': '#64748B',
				'text-helper': '#64748B',
				'text-placeholder': '#94A3B8',
				'text-disabled': '#94A3B8',
				'text-Light-Accent': '#44B556',
				'text-link': '#0F62FE',
				// icon
				'icon-primary': '#334155',
				'icon-secondary': '#64748B',

				// layer
				layer: '#FFFFFF',
				'layer-hover': '#F8FAFC',
				'layer-subtle': '#F8FAFC',
				'layer-active': '#F1F5F9',
				'layer-disabled': '#51F5F9',

				slate50: '#F8FAFC',
				slate100: '#F1F5F9',
				slate200: '#E2E8F0',
				slate300: '#CBD5E1',
				slate400: '#94A3B8',
				slate500: '#64748B',
				slate600: '#475569',
				slate700: '#334155',
				slate800: '#1E293B',
				slate900: '#0F172A'
			},

			backgroundColor: {
				background: '#F8FAFC',
				app: '#51F5F9',
				'app-foreground': '#FFFFFF',
				'layer-disabled': '#F8F8F8'
			},
			boxShadow: {
				base: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
				E0: '0px 0px 4px 0px rgba(52, 60, 70, 0.10)',
				E1: '0px 4px 10px 0px rgba(52, 60, 70, 0.10)'
			},
			borderColor: {
				'border-primary': '#E2E8F0',
				'border-hover': '#CBD5E1',
				'border-active': '#94A3B8',
				'border-disabled': '#E2E8F0'
			}
		}
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('tailwindcss'),
		require('autoprefixer')
	]
};
