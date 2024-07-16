<script>
	import BridgeMan from '$assets/home/desktop/create-and-share.jpg';
	import DesktopLaptop from '$assets/home/desktop/beautiful-stories.jpg';
	import CameraMan from '$assets/home/desktop/designed-for-everyone.jpg';

	const listItems = [
		{
			image: BridgeMan,
			title: 'CREATE AND SHARE YOUR PHOTO STORIES.',
			description:
				'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
			additionalClasses: {
				background: 'bg-black',
				title: 'text-white',
				minibar: 'left-[0%] -translate-y-1/2 transform bg-sideone'
			}
		},
		{
			image: DesktopLaptop,
			title: 'BEAUTIFUL STORIES EVERY TIME',
			description:
				'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
			additionalClasses: {
				background: 'bg-white',
				title: 'text-black',
				minibar: 'left-[100%] -translate-y-1/2 transform -translate-x-2 bg-lightone'
			}
		},
		{
			image: CameraMan,
			title: 'DESIGNED FOR EVERYONE',
			description:
				'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
			additionalClasses: {
				background: 'bg-white',
				title: 'text-black',
				minibar: 'left-[0%] -translate-y-1/2 transform bg-notsolightone'
			}
		}
	];
</script>

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
						{...$$props}
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
<main class="flex w-full flex-col items-center justify-center">
	{#each listItems as item, index}
		{@render Card(item, index)}
	{/each}
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
