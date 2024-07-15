<script>
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	import logo from '$assets/logo.svg';
	import menuIcon from '$assets/shared/mobile/menu.svg';
	import closeIcon from '$assets/shared/mobile/close.svg';
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
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
			<Button variant="ghost" size="icon" class="relative " onclick={toggleMenu}>
				<!-- img src={menu} alt="menu icon" /-->
				<div
					class="absolute h-1 w-8 rounded bg-black transition-all duration-100 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']"
					class:bg-transparent={isOpen}
					class:rotate-[720deg]={isOpen}
					class:before:translate-y-0={isOpen}
					class:before:rotate-45={isOpen}
					class:after:translate-y-0={isOpen}
					class:after:-rotate-45={isOpen}
				></div>
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
