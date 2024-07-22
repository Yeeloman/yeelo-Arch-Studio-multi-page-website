<script>
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
	let { children, data } = $props();

	const {
		// @ts-ignore
		logoDark,
		// @ts-ignore
		logoLight,
		// @ts-ignore
		socialMediaLogos
	} = data;
</script>

<!-- header content -->
{#snippet Header(siteLogo)}
	<div class="my-5 flex w-full items-center justify-between px-28 mymd:px-5">
		<a href="/" class="w-full">
			<img src={siteLogo} alt="photosnap logo" />
		</a>
		<div class="flex w-full items-center justify-between mymd:hidden">
			<nav class="space-x-7 text-sm font-semibold">
				<a href="/stories" class="duration-600 transition ease-in-out hover:opacity-30">STORIES</a>
				<a href="/features" class="duration-600 transition ease-in-out hover:opacity-30">FEATURES</a
				>
				<a href="/pricings" class="duration-600 transition ease-in-out hover:opacity-30">PRICING</a>
			</nav>
			<Button variant="default" size="default" class="rounded-none">GET AN INVITE</Button>
		</div>
		<div class="hidden flex-col mymd:flex">
			<Button variant="ghost" size="icon" class="relative" onclick={toggleMenu}>
				<!-- img src={menu} alt="menu icon" /-->
				<div
					class="absolute h-1 w-8 rounded bg-black transition-all duration-100 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']"
					class:bg-transparent={isOpen}
					class:rotate-[720deg]={isOpen}
					class:before:translate-y-1={isOpen}
					class:before:rotate-45={isOpen}
					class:after:translate-y-1={isOpen}
					class:after:-rotate-45={isOpen}
				></div>
			</Button>

			{#if isOpen}
				<section
					transition:fly={{ y: -100, duration: 500, easing: cubicInOut }}
					class="absolute left-0 top-20 z-[9999] hidden min-h-screen w-full flex-col items-center justify-center gap-9 bg-white mymd:flex"
				>
					<nav class="flex flex-col items-center justify-center gap-7 text-4xl font-semibold">
						<a href="/stories" class="duration-600 transition ease-in-out hover:opacity-30"
							>STORIES</a
						>
						<a href="/features" class="duration-600 transition ease-in-out hover:opacity-30"
							>FEATURES</a
						>
						<a href="/pricings" class="duration-600 transition ease-in-out hover:opacity-30"
							>PRICING</a
						>
					</nav>
					<Separator class="w-[80%] bg-mygray-dark" />
					<Button variant="default" class="w-[80%] rounded-none p-7 text-2xl">GET AN INVITE</Button>
				</section>
			{/if}
		</div>
	</div>
{/snippet}

<!-- social media snippet -->
{#snippet socialMedia({ white, colored })}
	<div class="group relative w-full">
		<img src={colored} alt="social logo" class="absolute" />
		<img src={white} alt="social logo" class="absolute group-hover:invisible" />
	</div>
{/snippet}

<!-- footer content -->
{#snippet footer(logo)}
	<div
		class="flex w-full justify-between bg-black p-32 mymd:flex-col mymd:items-center mymd:p-0 mymd:py-10"
	>
		<div
			class=" flex w-2/3 items-start justify-between mymd:flex-col mymd:items-center mymd:justify-center mymd:gap-10"
		>
			<div class=" flex flex-col gap-24 mymd:gap-7">
				<img src={logo} alt="PHOTOSNAP" class="" />
				<div class="flex items-center justify-center gap-4">
					{#each socialMediaLogos as logo}
						{@render socialMedia(logo)}
					{/each}
				</div>
			</div>

			<nav
				class="flex flex-col items-start justify-center gap-5 text-sm font-semibold text-white mymd:items-center"
			>
				<a href="/" class="duration-600 transition ease-in-out hover:opacity-30">home</a>
				<a href="/stories" class="duration-600 transition ease-in-out hover:opacity-30">Stories</a>
				<a href="/features" class="duration-600 transition ease-in-out hover:opacity-30">Features</a
				>
				<a href="/pricings" class="duration-600 transition ease-in-out hover:opacity-30">Pricing</a>
			</nav>
		</div>
		<div class="w-full">
			<div
				class="flex h-full flex-col items-end justify-between mymd:mt-14 mymd:items-center mymd:justify-center mymd:gap-5"
			>
				<a href="#" class="flex items-center justify-end gap-5">
					<span class="underline-animation font-semibold text-white">GET AN INVITE</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						class="bg-cover font-extralight text-gray-500"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m18 8l4 4m0 0l-4 4m4-4H2"
						/>
					</svg>
				</a>
				<p class="text-gray-500">Copyright 2019. All Rights Reserved</p>
			</div>
		</div>
	</div>
{/snippet}

<!-- main content -->
{@render Header(logoDark)}
{@render children()}
{@render footer(logoLight)}

<style>
	.underline-animation {
		position: relative;
		display: inline-block;
	}

	.underline-animation::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: gray;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}

	.underline-animation:hover::after {
		visibility: visible;
		width: 100%;
	}
</style>
