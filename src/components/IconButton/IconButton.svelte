<script lang="ts">
	import { cn } from '@/utils/function';
	import { cva } from 'class-variance-authority';
	import type * as icons from 'lucide-svelte';
	import Icon from '../Icon/Icon.svelte';

	const commonStyles = [
		'inline-flex items-center justify-center gap-x-2 p-3',
		'text-sm font-medium rounded-md',
		'transition-all duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:opacity-50 ring-offset-background disabled:cursor-not-allowed'
	];

	const buttonSizes = {
		xs: 'p-1.5',
		sm: 'p-2',
		md: 'p-2.5',
		lg: 'p-3',
		xl: 'p-3.5'
	};

	const primaryVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-brand-primary text-background-app hover:bg-brand-primary/90',
				outline:
					'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-background-app',
				ghost: 'hover:bg-brand-primary/10 hover:text-brand-primary  text-brand-primary'
			},
			size: buttonSizes
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	});

	const dangerVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-danger5  text-background-app hover:bg-danger5/90',
				outline: 'border border-danger5 text-danger5 hover:bg-danger5 hover:text-background-app',
				ghost: 'hover:bg-danger5/10 hover:text-danger5  text-danger5'
			},
			size: buttonSizes
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	});

	const neutralVariants = cva(commonStyles, {
		variants: {
			variant: {
				default: 'bg-gray11 text-background-app',
				outline: 'border border-gray11 text-gray11 hover:bg-gray11 hover:text-background-app',
				ghost: 'hover:bg-gray11/10 text-gray12 hover:text-gray12'
			},
			size: buttonSizes
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	});

	const variants = {
		primary: primaryVariants,
		danger: dangerVariants,
		neutral: neutralVariants
	};

	export const shade: 'primary' | 'danger' | 'neutral' = 'primary';
	export let variant: 'default' | 'outline' | 'ghost' | null | undefined;

	export let icon: keyof typeof icons;
	export const isDisabled: boolean = false;
	export const isLoading: boolean = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let className: string = '';
	const variantStyles = variants[shade];
</script>

<button
	class={cn(variantStyles({ className, variant, size }))}
	disabled={isDisabled || isLoading}
	{...$$props}
>
	{#if isLoading}
		<Icon icon="Loader2" testid="test-id" className="animate-spin mr-1" {size} />
	{:else}
		<Icon {icon} {size} testid="test-id" />
	{/if}
</button>
