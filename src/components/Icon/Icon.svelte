<script lang="ts">
	import { cn } from '@/utils/function';
	import { cva } from 'class-variance-authority';

	import * as icons from 'lucide-svelte';

	const IconsVariants = cva('', {
		variants: {
			size: {
				xs: 'h-2 w-2',
				sm: 'h-4 w-4',
				md: 'h-5 w-5',
				lg: 'h-6 w-6',
				xl: 'h-8 w-8'
			}
		}
	});
	/**
	 * The icon component to render. Pass a string belonging to lucide react.
	 */
	export let icon: keyof typeof icons;
	export let size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let className: string = '';
	const LucideIcon = icons[icon] as any;
</script>

<div>
	{#if icon}
		<LucideIcon class={cn(IconsVariants({ className, size }))} {...$$props} />
	{:else}
		<icons.HelpCircleIcon class={cn(IconsVariants({ className, size }))} {...$$props} />
	{/if}
</div>
