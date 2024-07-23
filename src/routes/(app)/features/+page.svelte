<script>
	let { data } = $props();

	const {
		//ts-ignore
		item,
		//ts-ignore
		flatItem,
		//ts-ignore
		smallSections
	} = data;
</script>

<!-- card snippet -->
{#snippet Card(item)}
	<div class="relative flex h-fit w-full flex-row-reverse mymd:flex-col">
		<div
			class="absolute left-[0%] top-[50%] h-[40%] w-[0.5rem] -translate-y-1/2 transform bg-sideone"
		></div>
		<div class="w-full">
			<img src={item.image} alt="man in a bridge" class="h-full bg-cover mymd:w-full" />
		</div>
		<div class="flex w-3/5 flex-col items-start justify-center gap-7 bg-black p-28 mymd:w-full">
			<h1 class="text-5xl font-bold text-white">{item.title}</h1>
			<p class="text-sm text-gray-500">{item.description}</p>
		</div>
	</div>
{/snippet}

<!-- flat card snippet -->
{#snippet flatCard(item)}
	<div class="relative flex h-fit w-full flex-row-reverse mymd:flex-col">
		<div
			class=" absolute left-[0%] top-[50%] h-full w-[0.3rem] -translate-y-1/2 transform bg-gradient-to-t from-[#5a77ff] via-[#bc7198] to-[#ffc593] mymd:left-4 mymd:top-0.5 mymd:h-[0.3rem] mymd:w-[40%] mymd:bg-gradient-to-r"
		></div>
		<img src={item.image} alt={item.title} class="h-full w-full object-cover" />

		<div class="absolute left-[15%] top-[25%] flex w-[400px] items-center justify-start text-white">
			<h1 class="text-5xl font-bold mymd:text-3xl">{item.title}</h1>
		</div>

		<div class="absolute left-[70%] top-[50%]">
			<a href="#" class="flex w-fit items-center justify-start gap-5">
				<span class="underline-animation text-sm font-semibold text-white"> GET AN INVITE </span>

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

<main class="flex w-full flex-col items-center justify-center">
	{@render Card(item)}
	<div class="my-32 grid w-full grid-cols-3 gap-5 px-24 mymd:grid-cols-2">
		{#each smallSections as section}
			{@render smallSection(section)}
		{/each}
	</div>
	{@render flatCard(flatItem)}
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
