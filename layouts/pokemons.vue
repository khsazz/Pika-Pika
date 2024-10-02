<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4">
				<NuxtLink to="/pokemons" class="font-bold">Pokemon Hub</NuxtLink>
			</nav>
		</header>

		<!--		page content-->
		<div>
			<slot></slot>
		</div>

		<footer class="container mx-auto p-4 flex justify-between t-2">
			<ul class="flex gap-4">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/about">Info</NuxtLink></li>
				<li><NuxtLink to="/pokemons">OG Pokemons</NuxtLink></li>
			</ul>
		</footer>
	</div>
</template>

<style scoped>
.router-link-exact-active {
	color: #12B488;
}
</style>
<script setup lang="ts">
</script>
