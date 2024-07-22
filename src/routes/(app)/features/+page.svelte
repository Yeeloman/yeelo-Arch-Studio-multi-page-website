<script>
	import cameraMan from '$assets/features/desktop/hero.jpg';

	const item = {
		image: cameraMan,
		title: 'FEATURES',
		description:
			'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
	};
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
			<h1 class="text-4xl font-bold text-white">{item.title}</h1>
			<p class="text-sm text-gray-500">{item.description}</p>
		</div>
	</div>
{/snippet}

<main class="flex w-full flex-col items-center justify-center">
	{@render Card(item)}
</main>
