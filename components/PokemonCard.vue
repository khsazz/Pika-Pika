<script setup lang="ts">
const { pokemon } = defineProps(['pokemon'])
</script>

<template>
	<div class="card text-center">
		<NuxtLink :to="`/pokemons/${pokemon.id}`" class="block text-center">
			<img class="mx-auto mb-2" :src="pokemon.imageUrl" alt="pokemon-card"/>
			<h2 class="font-semibold capitalize">{{ pokemon.name }}</h2>
			<div class="text-sm text-gray-600">
						<span v-for="(type, index) in pokemon.types" :key="type" class="mr-1">
							{{ type }}{{ index < pokemon.types.length - 1 ? ',' : '' }}
						</span>
			</div>
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>
