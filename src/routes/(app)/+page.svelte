<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let { data } = $props();
	const { listItems, miniCards, smallSections } = data;
</script>

<!-- card snippet -->
{#snippet Card(item, index)}
	<div class="relative flex h-fit w-full {index % 2 ? '' : 'flex-row-reverse'} mymd:flex-col">
		<div class="absolute top-[50%] h-[60%] w-[0.5rem] {item.additionalClasses.minibar}"></div>
		<div class="w-full">
			<img src={item.image} alt="man in a bridge" class="h-full bg-cover mymd:w-full" />
		</div>
		<div
			class="flex w-3/5 flex-col items-center justify-center gap-7 {item.additionalClasses
				.background} p-28 mymd:w-full"
		>
			<h1 class="text-4xl font-bold {item.additionalClasses.title}">{item.title}</h1>
			<p class="text-sm text-gray-500">{item.description}</p>
			<a href="#" class="self-start text-sm font-semibold text-white">
				<div class="flex w-full items-center justify-center gap-9">
					<span class="underline-animation {item.additionalClasses.title}"> GET AN INVITE </span>
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
				</div>
			</a>
		</div>
	</div>
{/snippet}

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

<!-- small section snippter -->
{#snippet smallSection({ image, title, desc })}
	<div class="flex flex-col items-center justify-center gap-9">
		<div class="flex size-32 items-center justify-center">
			<img src={image} alt={title} class="object-fill" />
		</div>
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-xl font-bold">{title}</h1>
			<p class="text-center font-thin text-gray-700">{desc}</p>
		</div>
	</div>
{/snippet}

<!-- main content -->
<main class="flex w-full flex-col items-center justify-center">
	{#each listItems as item, index}
		{@render Card(item, index)}
	{/each}
	<div class="grid w-full grid-cols-4 mymd:grid-cols-2">
		{#each miniCards as content}
			{@render miniCard(content)}
		{/each}
	</div>
	<div class="my-32 flex w-full items-center justify-between gap-5 px-24 mymd:flex-col">
		{#each smallSections as section}
			{@render smallSection(section)}
		{/each}
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
