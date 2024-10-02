export default defineEventHandler(async (event)=> {
	const { name } = event.context.params

	const uri: string = `https://pokeapi.co/api/v2/pokemon/${name}`

	return await $fetch(uri)
})
