<script setup lang="ts">
const {id} = useRoute().params
definePageMeta({
	layout: 'pokemons'
})

const {getPokemonById} = usePokemonStore()
const pokemonDetails = getPokemonById.value(Number(id.toString()))
</script>

<template>
	<div>
		<PokemonDetails :pokemon="pokemonDetails"/>
	</div>
</template>

<style scoped>

</style>
