<script lang="ts">
	import { Avatar } from 'radix-svelte';
	import { cva } from 'class-variance-authority';
	import { cn } from '@/utils/function';

	export let avatar: { name: String; src: string };
	export let size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	export let className: string;
	export let shape: 'circle' | 'square';

	const [firstWord, secondWord] = avatar?.name?.split(' ') || [];
	const initials = secondWord
		? `${firstWord?.charAt(0)}${secondWord.charAt(0)}`
		: `${firstWord?.charAt(0)}`;

	const avatarVariant = cva(
		'flex-shrink-0 inline-flex justify-center items-center object-cover rounded-full  bg-gray5 text-gray12 border border-brand-primary',
		{
			variants: {
				size: {
					xl: ['h-16', 'w-16', 'text-xl'],
					lg: ['h-12', 'w-12', 'text-lg'],
					md: ['h-8', 'w-8', 'text-md'],
					sm: ['h-6', 'w-6', 'text-sm'],
					xs: ['h-4', 'w-4', 'text-xs']
				},
				shape: {
					circle: 'rounded-full',
					square: 'rounded'
				}
			},
			defaultVariants: {
				shape: 'circle',
				size: 'md'
			}
		}
	);
</script>

<div class="flex gap-4">
	<Avatar.Root
		class={cn(
			avatarVariant({
				className,
				size,
				shape
			})
		)}
	>
		{#if avatar?.src}
			<Avatar.Image
				class="h-full w-full rounded-[inherit] object-cover "
				src={avatar?.src}
				alt={'avatar-image'}
			/>
		{:else}
			<Avatar.Fallback delayMs={10}>
				{avatar?.name ? initials?.toUpperCase() : 'NA'}
			</Avatar.Fallback>
		{/if}
	</Avatar.Root>
</div>
