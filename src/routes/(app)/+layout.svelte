<script>
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	import logo from '$assets/logo.svg';
	import menuIcon from '$assets/shared/mobile/menu.svg';
	import closeIcon from '$assets/shared/mobile/close.svg';
	let { children } = $props();
</script>

<!-- header content -->
{#snippet Header(siteLogo, menu, close)}
	<div class="my-5 flex w-full items-center justify-between">
		<a href="/" class="w-full">
			<img src={siteLogo} alt="photosnap logo" />
		</a>
		<div class="flex w-full items-center justify-between mymd:hidden">
			<nav class="space-x-7 text-sm font-semibold">
				<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">STORIES</a>
				<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">FEATURES</a>
				<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">PRICING</a>
			</nav>
			<Button variant="default" size="default" class="rounded-none">GET AN INVITE</Button>
		</div>
		<div class="hidden flex-col mymd:flex">
			<Button variant="ghost" size="icon" class="relative ">
				<img src={menu} alt="menu icon" />
			</Button>
			<section
				class="absolute left-0 top-20 hidden min-h-screen w-full flex-col items-center justify-center gap-9 bg-white mymd:flex"
			>
				<nav class="flex flex-col items-center justify-center gap-7 text-4xl font-semibold">
					<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">STORIES</a>
					<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">FEATURES</a>
					<a href="#" class="duration-600 transition ease-in-out hover:opacity-30">PRICING</a>
				</nav>
				<Separator class="w-[80%] bg-mygray-dark" />
				<Button variant="default" class="w-[80%] rounded-none p-7 text-2xl">GET AN INVITE</Button>
			</section>
		</div>
	</div>
{/snippet}

<!-- main content -->
<main class="flex flex-col items-center justify-center">
	{@render Header(logo, menuIcon, closeIcon)}
	{@render children()}
</main>
