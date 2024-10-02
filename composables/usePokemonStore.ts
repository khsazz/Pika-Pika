interface Pokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	types: string[];
	abilities: string[];
	imageUrl: string;
	moves: string[];
	sprites: {};
}

export const usePokemonStore = () => {
	const pokemonList = useState<Pokemon[]>('pokemonList', () => [])
	const isLoading = ref(false)
	const error = ref<string | null>(null)

	const fetchPokemonDetails = async (url: string): Promise<Pokemon> => {
		const {data: details} = await useFetch<any>(url)
		return {
			id: details.value.id,
			name: details.value.name,
			types: details.value.types.map((item: { type: { name: string } }) => item.type.name),
			imageUrl: details.value.sprites.front_default,
			moves: details.value.moves.map((item: {move: {name: string}}) => item.move.name),
			sprites: details.value.sprites,
			height: details.value.height / 10,
			weight: details.value.weight / 10,
			abilities: details.value.abilities.map((item: {ability: {name: string}}) => item.ability.name),
		}
	}

	const fetchAllPokemon = async () => {
		if (pokemonList.value.length > 0) return // Don't fetch if we already have data

		isLoading.value = true
		error.value = null

		try {
			const {data} =
				await useFetch<{ results: { url: string }[]
			}>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

			if (data.value) {
				pokemonList.value =
					await Promise.all(data.value.results
						.map(pokemon => fetchPokemonDetails(pokemon.url)))
			}
		} catch (e) {
			error.value = 'Failed to fetch Pokémon data'
		} finally {
			isLoading.value = false
		}
	}

	const getPokemonById = computed(() => (id: number) =>
		pokemonList.value.find(pokemon => pokemon.id === id)
	)

	return {
		pokemonList,
		isLoading,
		error,
		fetchAllPokemon,
		getPokemonById
	}
}
