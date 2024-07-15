<script>
	import { Button } from '$lib/components/ui/button';
	import logo from '$assets/logo.svg';
	let { children } = $props();
</script>

<!-- header content -->
{#snippet Header(image)}
	<div class="my-5 flex w-full items-center justify-between px-36">
		<img src={image} alt="photosnap logo" class="" />
		<div class="space-x-7 text-sm font-semibold">
			<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">STORIES</a>
			<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">FEATURES</a>
			<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">PRICING</a>
		</div>
		<Button variant="default" size="default" class="rounded-none">GET AN INVITE</Button>
	</div>
{/snippet}

<!-- main content -->
<main class="flex flex-col items-center justify-center">
	{@render Header(logo)}
	{@render children()}
</main>
