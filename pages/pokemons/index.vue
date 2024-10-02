<script setup lang="ts">

definePageMeta({
	layout: 'pokemons'
})
const { pokemonList, isLoading, error, fetchAllPokemon } = usePokemonStore()
onMounted(async () => {
	if (pokemonList.value.length === 0) {
		await fetchAllPokemon()
	}
})

</script>

<template>
	<div class="container mx-auto px-4">
		<h1 class="text-2xl font-bold mb-4">Pokémon List</h1>
		<div v-if="error" class="text-red-500 text-center">
			An error occurred while fetching Pokémon data. Please try again later.
			<p>{{error}}</p>
		</div>
		<div v-else-if="isLoading" class="text-center">
			<p>Loading Pokémon data...</p>
		</div>
		<div v-else class="grid grid-cols-3 gap-5 mx-auto">
			<PokemonCard :pokemon="pokemon" v-for="pokemon in pokemonList" :key="pokemon.id"/>
		</div>
	</div>
</template>

<style scoped>

</style>
