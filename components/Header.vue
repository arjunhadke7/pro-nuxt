<template>
	<div>
		<header>
			<nav class="relative bg-white shadow dark:bg-gray-800 mb-10">
				<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
					<div class="flex items-center justify-between">
						<NuxtLink to="/" class="text-white text-2xl">
							<!-- <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> -->
							Arjun's Photo Blog
						</NuxtLink>

						<!-- Mobile menu button -->
						<div class="flex lg:hidden">
							<button type="button"
								class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
								aria-label="toggle menu">
								<!-- Menu button on phones -->
								<svg 
								xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
								@click="menuBtn()"
								
								:class="[isOpen ? 'hidden' : 'block']"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
								</svg>
							
								<!-- Cross button on phones -->
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
								@click="menuBtn()"
								
								:class="[isOpen ? 'block' : 'hidden']"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<!-- End of Mobile Menu button here -->
					</div>

					<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
					<div
						class="absolute inset-x-0 z-20 w-full px-6 py-4 transition duration-700 ease-linear bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
						:class="[isOpen ? 'block' : 'hidden']"
						>
						
						<div class="flex flex-col md:flex-row md:mx-6">
							<NuxtLink
								class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
								to="/">Back to Home</NuxtLink>
							<NuxtLink
								class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
								to="/">Blog</NuxtLink>
							<NuxtLink
								class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
								to="/">About</NuxtLink>
							<NuxtLink
								class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
								to="/">Contact</NuxtLink>
						</div>

						<div class="flex justify-center md:block">
							<a class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
								href="#">

							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>


<script>

export default {
	setup() {
		let isOpen = ref(false)
		const menuBtn = () => {
			isOpen.value = !isOpen.value
		}
		return {
			isOpen,
			menuBtn
		}
	}
}

</script>