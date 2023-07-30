<script>
	import Button from '@/components/Button/Button.svelte';
	import Icon from '@/components/Icon/Icon.svelte';
	import IconButton from '@/components/IconButton/IconButton.svelte';
	import NavBar from '@/components/mainNavBar/NavBar.svelte';
	import Modal from '@/components/Modal/Modal.svelte';
	import Popover from '@/components/Popover/Popover.svelte';
	import Text from '@/components/Text/Text.svelte';
	let isOpen = false;
	const onClose = () => {
		isOpen = false;
	};
</script>

<div>
	<NavBar />
	<div>
		<IconButton icon="AirplayIcon" />
		<Button
			on:click={() => {
				isOpen = true;
			}}
		>
			<svelte:fragment slot="leadingIcon">
				<Icon icon="AirplayIcon" />
			</svelte:fragment>

			open</Button
		>

		<Popover>
			<div slot="trigger">Hello</div>
			<div class=" w-[200px]">
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae est necessitatibus
					soluta voluptatibus fugiat eos eveniet. Nihil minima recusandae veniam, animi, est
					doloribus nostrum, quaerat dolore voluptatem quos vitae? Voluptatem?
				</Text>
			</div>
		</Popover>
	</div>
</div>
