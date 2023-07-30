<script>
	import Avatar from '../Avatar/Avatar.svelte';
</script>

<div
	class="sticky top-0 z-10 flex h-[56px] items-center justify-between border-b border-border-primary bg-gray0 px-6"
>
	<div class="flex items-center gap-4">
		<div class="flex items-center gap-4">
			<img
				height={0}
				width={0}
				class="h-[32px] w-full"
				sizes="100vh"
				src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}
				alt={'logo'}
			/>
		</div>
	</div>
	<div>
		<Avatar avatar={{ name: 'pankaj', src: '' }} size="md" />
	</div>
</div>
