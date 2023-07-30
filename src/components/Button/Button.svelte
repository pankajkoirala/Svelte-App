<script lang="ts">
	import { cva } from 'class-variance-authority';
	import { cn } from '@/utils/function';
	import Icon from '../Icon/Icon.svelte';

	export let isDisabled: boolean;

	export let shade: 'primary' | 'danger' | 'neutral' = 'primary';
	export let isLoading: boolean;
	export let size: 'lg' | 'md' | 'sm' | 'xs' | null | undefined;
	export let className: string;
	export let variant: 'outline' | 'ghost' | 'link';
	export let loadingText: string = 'Loading';

	const commonStyles = [
		'inline-flex items-center justify-center gap-x-2',
		'text-sm font-medium rounded-md',
		'transition-all duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:opacity-50 ring-offset-background disabled:cursor-not-allowed'
	];

	const buttonSize = {
		xs: 'h-7 py-1 px-4 rounded-md ',
		sm: 'h-8 py-1 px-4 rounded-md',
		md: 'h-10 py-2 px-4 rounded-md',
		lg: 'h-12 py-3 px-4 rounded-md'
	};

	const buttonWidth = {
		fit: 'w-fit',
		full: 'w-full'
	};

	const primaryVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-brand-primary text-background-app hover:bg-brand-primary/90',
				outline:
					'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-background-app',
				ghost: 'hover:bg-brand-primary/10 hover:text-brand-primary  text-brand-primary',
				link: 'underline-offset-4  text-brand-primary hover:underline '
			},
			size: buttonSize,
			width: buttonWidth
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			width: 'fit'
		}
	});

	const dangerVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-danger5  text-background-app hover:bg-danger5/90',
				outline: 'border border-danger5 text-danger5 hover:bg-danger5 hover:text-background-app',
				ghost: 'hover:bg-danger5/10 hover:text-danger5  text-danger5',
				link: 'underline-offset-4  text-danger5 hover:underline '
			},

			size: buttonSize,
			width: buttonWidth
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			width: 'fit'
		}
	});

	const neutralVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-gray11 text-background-app',
				outline: 'border border-gray11 text-gray11 hover:bg-gray11 hover:text-background-app',
				ghost: 'hover:bg-gray11/10 text-gray12 hover:text-gray12',
				link: 'underline-offset-4 hover:underline text-primary'
			},

			size: buttonSize,
			width: buttonWidth
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			width: 'fit'
		}
	});

	const variants = {
		primary: primaryVariants,
		danger: dangerVariants,
		neutral: neutralVariants
	};
	const variantStyles = variants[shade];
</script>

<button
	{...$$props}
	class={cn(variantStyles({ className, variant, size }))}
	disabled={isDisabled || isLoading}
>
	{#if isLoading}
		<div class="flex gap-1">
			<Icon icon="Loader2" className="animate-spin mr-1" />
			{loadingText}
		</div>
	{:else}
		<div class="flex gap-1">
			<slot name="leadingIcon" />
			<slot />
			<slot name="trailIcon" />
		</div>
	{/if}</button
>
