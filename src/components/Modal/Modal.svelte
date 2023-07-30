<script lang="ts">
	import { cn } from '@/utils/function';
	import { AlertDialog, Label } from 'radix-svelte';
	// These are internal icons, but they're not exported from the package.
	// Use your own icons instead.
	export let isOpen: boolean = false;
	export let title: Node;
	export let children: Node;
	export let onClose: () => void;
	export let primaryAction: {
		label: string;
		onClick?: () => void;
		className?: string;
		disabled?: boolean;
		isLoading?: boolean;
	};
	export let secondaryAction: {
		label: string;
		onClick?: () => void;
		className?: string;
		disabled?: boolean;
		isLoading?: boolean;
	};
	export let footerPlacement:
		| 'justify-end'
		| 'justify-start'
		| 'justify-center'
		| 'justify-between';
</script>

<AlertDialog.Root open={isOpen}>
	<AlertDialog.Portal on:click={onClose}>
		<AlertDialog.Overlay class="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow" />
		<AlertDialog.Content
			class="data-[state=open]:animate-contentShow bg-white fixed left-[50%] top-[40px] z-20   min-w-[500px]  max-w-[90vw] translate-x-[-50%]  overflow-hidden  rounded-md bg-gray0 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none px-4 "
		>
			{#if title}
				<AlertDialog.Title
					class="m-0 text-lg font-medium text-black py-4 border-b border-border-primary"
					>{title}</AlertDialog.Title
				>
			{/if}
			<AlertDialog.Description
				class=" leading-normal text-zinc-600 py-4 border-b border-border-primary"
			>
				{children ?? 'No children to render'}
			</AlertDialog.Description>

			<div class=" flex justify-end gap-4 py-4">
				<button
					on:click={() => onClose()}
					class=" inline-flex h-9 items-center justify-center rounded-md bg-zinc-100
				px-4 font-medium leading-none text-zinc-600 focus:outline-none focus:ring-2 focus:ring-black"
				>
					{secondaryAction?.label ?? 'Cancel'}
				</button>
				<button
					on:click={(e) => {
						e.stopPropagation();
						console.log('click vo hai');
					}}
					class={cn(
						[
							`justify-end inline-flex h-9 items-center  rounded-md bg-red-100
                    px-4 font-medium leading-none text-red-600 focus:outline-none focus:ring-2 focus:ring-black `
						],
						{
							'justify-between': footerPlacement
						}
					)}
				>
					{primaryAction?.label ?? 'Yes, Save'}
				</button>
			</div>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
