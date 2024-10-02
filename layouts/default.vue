<template>
	<div class="min-h-screen flex flex-col">
		<header class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white shadow-lg">
			<nav class="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
				<NuxtLink to="/" class="text-2xl font-bold hover:text-yellow-200 transition-colors duration-200">
					Pika Pika
				</NuxtLink>
				<button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
				<ul :class="['lg:flex gap-4', isMenuOpen ? 'block' : 'hidden']" class="w-full lg:w-auto mt-4 lg:mt-0">
					<li v-for="link in navLinks" :key="link.to">
						<NuxtLink :to="link.to" class="block py-2 px-4 rounded-full hover:bg-white hover:text-red-500 transition-colors duration-200" :class="{ 'bg-white text-red-500': isActiveRoute(link.to) }">
							{{ link.text }}
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<!-- Page content -->
		<main class="container mx-auto px-4 py-8 flex-grow">
			<slot></slot>
		</main>

		<footer class="bg-gray-800 text-white py-4">
			<div class="container mx-auto px-4 text-center">
				&copy; {{ new Date().getFullYear() }} Pika Pika. All rights reserved.
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const navLinks = [
	{ to: '/', text: 'Home' },
	{ to: '/about', text: 'Info' },
	{ to: '/pokemons', text: 'OG Pokemons' }
]

const isActiveRoute = (path) => {
	return route.path === path
}
</script>

<style scoped>
/* Add any additional scoped styles here if needed */
</style>
