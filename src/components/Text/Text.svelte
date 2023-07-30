<script lang="ts">
	import { cva } from 'class-variance-authority';

	export let size: 's1' | 's2' | 's3' | 'r1' | 'r2' | 'r3' | 'l1' | 'l2' | 'm1' | 'm2';

	export let fontWeight: '400' | '500' | '600' | '700' = '400';

	export let variant:
		| 'bodySmall'
		| 'bodyLarge'
		| 'bodyRegular'
		| 'formLabel'
		| 'formInput'
		| 'formHelper'
		| 'tableHeader'
		| 'pageHeader'
		| 'tabs'
		| 'switch'
		| 'stickyCardHeader'
		| 'default'
		| 'navItems';

	const textVariants = cva([''], {
		variants: {
			size: {
				s1: 'text-[10px]',
				s2: 'text-xs',
				s3: 'text-[13px]',
				r1: 'text-sm',
				r2: 'text-base',
				r3: 'text-xl',
				l1: 'text-2xl',
				l2: 'text-[28px]',
				m1: 'text-[32px]',
				m2: 'text-5xl'
			},
			fontWeight: {
				'400': 'font-normal',
				'500': 'font-medium',
				'600': 'font-semibold',
				'700': 'font-bold'
			},
			variant: {
				default: '',
				bodySmall: 'text-xs font-normal leading-normal',
				bodyRegular: 'text-sm font-normal leading-normal',
				bodyLarge: 'text-base font-normal leading-normal',
				formLabel: 'text-sm font-medium leading-normal',
				formInput: 'text-base font-normal leading-normal',
				formHelper: 'text-xs font-normal leading-normal',
				tableHeader: 'text-sm font-medium leading-normal',
				pageHeader: 'text-2xl font-medium leading-normal',
				tabs: 'text-base font-medium leading-normal',
				switch: 'text-base font-medium leading-normal',
				stickyCardHeader: 'text-base font-medium leading-normal',
				navItems: 'text-base font-medium leading-normal'
			}
		},
		defaultVariants: {}
	});
</script>

<div {...$$props} class={textVariants({ variant, size, fontWeight })}>
	<slot />
</div>
