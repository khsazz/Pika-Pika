<script setup lang="ts">
const {pokemon} = defineProps(['pokemon'])

const getTypeColor = (type: string) => {
	const colors: Record<string, string> = {
		normal: 'bg-gray-400 text-gray-800',
		fire: 'bg-red-500 text-white',
		water: 'bg-blue-500 text-white',
		electric: 'bg-yellow-400 text-gray-800',
		grass: 'bg-green-500 text-white',
		ice: 'bg-blue-200 text-gray-800',
		fighting: 'bg-red-700 text-white',
		poison: 'bg-purple-500 text-white',
		ground: 'bg-yellow-600 text-white',
		flying: 'bg-indigo-400 text-white',
		psychic: 'bg-pink-500 text-white',
		bug: 'bg-green-400 text-gray-800',
		rock: 'bg-yellow-700 text-white',
		ghost: 'bg-purple-700 text-white',
		dragon: 'bg-indigo-700 text-white',
		dark: 'bg-gray-700 text-white',
		steel: 'bg-gray-500 text-white',
		fairy: 'bg-pink-300 text-gray-800',
	}
	return colors[type.toLowerCase()] || 'bg-gray-300 text-gray-800'
}
</script>

<template>
	<div class="grid grid-cols-2 gap-10">
		<div class="p-7">
<!--							<img class="mx-auto my-7" :src="pokemon.cries.latest" alt="pokemon-card"/>-->
			<!--				<img class="mx-auto my-7" :src="pokemon.sprites.front_shiny" alt="pokemon-card"/>-->
			<!--				<img class="mx-auto my-7" :src="pokemon.sprites.other['official-artwork'].front_shiny" alt="pokemon-card"/>-->
			<img class="mx-auto my-4 rounded-lg shadow-md" :src="pokemon.sprites.other['official-artwork'].front_default"
			     alt="pokemon-card"/>
		</div>
		<div class="p-7">
			<h2 class="text-4xl my-7 capitalize">{{ pokemon.name }}</h2>
			<span
					v-for="(type, index) in pokemon.types"
					:key="type"
					class="inline-block px-3 py-1 mr-2 mb-2 rounded-full text-sm font-semibold"
					:class="getTypeColor(type)">{{ type }}</span>
			<p class="text-lg">Height: <span class="font-semibold">{{ pokemon.height }} m</span></p>
			<p class="text-lg">Weight: <span class="font-semibold">{{ pokemon.weight }} kg</span></p>
			<p class="text-lg">Abilities: <span class="font-semibold">{{ pokemon.abilities.join(', ') }}</span></p>
			<!--				<p class="text-lg">Moves: </p>-->
			<div class="border border-gray-300 rounded-lg">
				<!-- Accordion Item 1 -->
				<div class="border-b">
					<a href="#item1" class="flex justify-between items-center p-5 text-gray-700 hover:bg-gray-100">
						<span>Moves</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200"
						     viewBox="0 0 20 20" fill="currentColor">
							<path
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
						</svg>
					</a>
					<div id="item1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
						<div class="p-5 text-gray-600">
							<span class="font-extralight">{{ pokemon.moves.join(', ') }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
/* Style for the active accordion item */
#item1:target, #item2:target, #item3:target {
	max-height: none; /* Allow the targeted item to expand fully */
}
</style>
