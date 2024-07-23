<script>
	import * as Table from '$lib/components/ui/table';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import check from '$assets/pricing/desktop/check.svg';
	import { Button } from '$lib/components/ui/button';

	let { data } = $props();
	const {
		//ts-config
		item,
		//ts-config
		flatItem,
		//ts-config
		priceCards
	} = data;

	let isChecked = $state(false);
</script>

<!-- card snippet -->
{#snippet CarD(item)}
	<div class="relative flex h-fit w-full flex-row-reverse mymd:flex-col">
		<div
			class="absolute left-[0%] top-[50%] h-[50%] w-[0.5rem] -translate-y-1/2 transform bg-sideone"
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

<!-- table snippet -->
{#snippet table()}
	<h1 class="mb-5 text-5xl font-bold uppercase">compare</h1>
	<Table.Root class="uppercase">
		<Table.Header>
			<Table.Row>
				<Table.Head>THE FEATURES</Table.Head>
				<Table.Head>BASIC</Table.Head>
				<Table.Head>pro</Table.Head>
				<Table.Head>business</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-bold">UNLIMITED STORY POSTING</Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">UNLIMITED PHOTO UPLOAD</Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">EMBEDDING CUSTOM CONTENT</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">CUSTOMIZE METADATA</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">ADVANCED METRICS</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">PHOTO DOWNLOADS</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">SEARCH ENGINE INDEXING</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell class="font-bold">CUSTOM ANALYTICS</Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell></Table.Cell>
				<Table.Cell><img src={check} alt="check" /></Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
{/snippet}

{#snippet priceCard(item, i)}
	<Card.Root
		class=" relative flex w-[22rem] flex-col items-center justify-center gap-10 rounded-none {i % 2
			? 'h-[30rem] bg-black  text-white'
			: 'h-[25rem] bg-white text-black'}"
	>
		<div
			class="{i % 2
				? 'visible'
				: 'invisible'}  absolute left-[0%] top-0.5 h-[0.3rem] w-full -translate-y-1/2 transform bg-gradient-to-r from-[#5a77ff] via-[#bc7198] to-[#ffc593] mymd:left-0 mymd:top-[50%] mymd:h-full mymd:w-[0.3rem] mymd:bg-gradient-to-t"
		></div>
		<Card.Header class="flex w-[80%] flex-col items-center justify-center text-center">
			<Card.Title class="text-xl font-bold">{item.title}</Card.Title>
			<Card.Description>{item.desc}</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col items-center justify-center">
			<p class="text-5xl font-bold">
				{#if isChecked}
					${item.price.year}
				{:else}
					${item.price.month}
				{/if}
			</p>
			<p class="text-sm text-gray-400">per {isChecked ? 'year' : 'month'}</p>
		</Card.Content>
		<Card.Footer class="flex w-full items-center justify-center">
			<Button class="uppercase tracking-widest" variant={i % 2 ? 'revDef' : 'default'} size="price"
				>Pick plan</Button
			>
		</Card.Footer>
	</Card.Root>
{/snippet}
<!-- pricing cards section -->
{#snippet price()}
	<div class="mt-36 flex w-full flex-col items-center justify-center gap-20">
		<div class="flex w-full items-center justify-center gap-5">
			<h3 class="text-2xl font-bold {isChecked ? 'text-gray-400' : ''}">Monthly</h3>
			<Switch bind:checked={isChecked} />
			<h3 class="text-2xl font-bold {isChecked ? '' : 'text-gray-400'}">Yearly</h3>
		</div>
		<div class="flex w-full items-center justify-center gap-5 px-28 mymd:flex-col">
			{#each priceCards as item, index}
				{@render priceCard(item, index)}
			{/each}
		</div>
	</div>
{/snippet}

<!-- main content -->
<main class="flex w-full flex-col items-center justify-center">
	{@render CarD(item)}
	{@render price()}
	<div class="my-44 flex h-fit w-full flex-col items-center justify-center px-56 mymd:px-2">
		{@render table()}
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
