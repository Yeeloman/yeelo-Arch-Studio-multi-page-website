<script>
	import mountainBackground from '$assets/stories/desktop/moon-of-appalacia.jpg';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<!-- mini card snippet -->
{#snippet miniCard({ image, title, author })}
	<div
		class="max-w-1/4 mymd:max-w-1/2 duration-900 group relative flex transform flex-col justify-start transition-transform hover:-translate-y-7"
	>
		<div
			class="invisible absolute bottom-0 z-[9999] h-[0.5rem] w-full bg-gradient-to-r from-[#5a77ff] via-[#bc7198] to-[#ffc593] group-hover:visible"
		></div>
		<img src={image} alt={title} class="brightness-50" />
		<div class="absolute top-[70%] h-fit w-full px-10 group-hover:opacity-75">
			<h1 class="text-xl font-bold text-white">{title}</h1>
			<p class="text-sm font-thin text-white">by {author}</p>
			<Separator class="my-3 bg-gray-500" />
			<a href="#" class="flex items-center justify-between">
				<span class="underline-animation font-semibold text-white"> READ STORY </span>

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
		</div>
	</div>
{/snippet}

<main class="flex w-full flex-col items-center justify-center">
	<div class="relative w-full">
		<img src={mountainBackground} alt="moon of appalacia" class="brightness-0" />
		<div class="absolute top-1/2 text-start text-white">
			<p>LAST MONTH'S FEATURED STORY</p>
			<h1>HAZY FULL MOON OF APPALACHIA</h1>
			<p>March 2nd 2020 by John Appleseed</p>
			<p>
				The dissected plateau area, while not actually made up of geological mountains, is popularly
				called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges
				are not high, the terrain is extremely rugged.
			</p>
			<a href="#" class="flex w-fit items-center justify-start gap-5">
				<span class="underline-animation font-semibold text-white"> READ THE STORY </span>

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
		</div>
	</div>
</main>

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
