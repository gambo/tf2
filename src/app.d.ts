// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	type SiteTags = "personal" | "career" | "code" | "design"
	type SiteDate = Date
	type SiteMeta = {
		date: SiteDate
		image: string
		alt: string
		tags: SiteTags[]
		title: string
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
