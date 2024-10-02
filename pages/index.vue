<script setup lang="ts">
const data = ref<{} | null>()
const input = ref<string>('')

const onSearch = async () => {
	if (input.value) {
		try {
			data.value = await $fetch('/api/pokedex/' + input.value)
		} catch (error) {
			console.error('Error fetching Pokémon data:', error);
			data.value = null;
		}
	}
}
</script>

<template>
	<div class="max-w-4xl mx-auto text-center">
		<div class="mb-3.5">
			<span class="font-extrabold text-4xl text-teal-700">Welcome to Pika Pika!</span>
		</div>

		<div>
			<form @submit.prevent="onSearch" class="space-x-2 mb-6">
				<input v-model="input" type="text" placeholder="Try Pikachu!"
				       class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
				<button type="submit"
				        class="bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
				>Search</button>
			</form>
		</div>

		<div class="mx-auto">
			<img v-if="data?.sprites" class="mx-auto my-4 rounded-lg shadow-md"
			     :src="data?.sprites.other['official-artwork'].front_default"
			     alt="pokemon-card"/>
			<img v-else src="/img/landing-poster.jpg" alt="a poster of pokemons"/>
		</div>
	</div>
</template>

<style scoped>
</style>
