<script>
	import BridgeMan from '$assets/home/desktop/create-and-share.jpg';
	import DesktopLaptop from '$assets/home/desktop/beautiful-stories.jpg';
	import CameraMan from '$assets/home/desktop/designed-for-everyone.jpg';
</script>

{#snippet Card()}
	<div class="flex h-fit w-full flex-row-reverse">
		<div class="w-full">
			<img src={BridgeMan} alt="man in a bridge" />
		</div>
		<div class="relative flex w-3/5 flex-col items-center justify-center gap-7 bg-black p-28">
			<h1 class="text-4xl font-bold text-white">CREATE AND SHARE YOUR PHOTO STORIES.</h1>
			<p class="text-sm text-gray-500">
				Photosnap is a platform for photographers and visual storytellers. We make it easy to share
				photos, tell stories and connect with others.
			</p>
			<a href="#" class="self-start text-sm font-semibold text-white">
				<div class="flex w-full items-center justify-center gap-9">
					GET AN INVITE
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						class="font-extralight text-gray-500"
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
			<div class="top-50 bg-sideone absolute left-0 h-[60%] w-[0.5rem]"></div>
		</div>
	</div>
{/snippet}
<main class="flex w-full items-center justify-center">
	{@render Card()}
</main>
