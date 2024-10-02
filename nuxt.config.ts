// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: {enabled: true},
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Roboto: true,
			preload: true
		}
	},
	app: {
		head: {
			title: 'Pika Pika',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
			],
			meta: [{
				name: 'description',
				content: 'A list of Pokemons'
			}]
		}
	}
})
