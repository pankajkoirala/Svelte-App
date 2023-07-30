<script lang="ts">
	import { Popper } from 'radix-svelte/internal/components';

	let arrowWidth: number = 10;
	let arrowHeight: number = 5;
	let contentSide = 'bottom';
	let contentSideOffset: number;
	let contentAlign = 'center';
	let contentAlignOffset: number;
	let contentArrowPadding: number;
	let contentCollisionPadding: number;
	let contentSticky = 'partial';
	let contentHideWhenDetached: boolean;
	let contentAvoidCollisions: boolean = true;

	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}

	/** Dispatch event on click outside of node */
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				// node.dispatchEvent(new CustomEvent('clickOutside', { detail: node }));
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<div class="grid place-items-center">
	{#key isOpen}
		<Popper.Root>
			<div class="cursor-pointer">
				<Popper.Anchor on:click={toggle}>
					<slot name="trigger" />
				</Popper.Anchor>
			</div>

			{#if isOpen}
				<div use:clickOutside>
					<Popper.Content
						class="rounded-lg bg-brand-primary p-4 z-50 shadow-md h-fit"
						side={contentSide}
						sideOffset={contentSideOffset}
						align={contentAlign}
						alignOffset={contentAlignOffset}
						arrowPadding={contentArrowPadding}
						collisionPadding={contentCollisionPadding}
						sticky={contentSticky}
						hideWhenDetached={contentHideWhenDetached}
						avoidCollisions={contentAvoidCollisions}
					>
						<slot />
						<Popper.Arrow width={arrowWidth} height={arrowHeight} class="fill-black/20" />
					</Popper.Content>
				</div>
			{/if}
		</Popper.Root>
	{/key}
</div>
