import type { Component } from "svelte"

type ImportMeta = { default: Component, meta: SiteMeta }
type ImportEntries = Record<string, () => Promise<ImportMeta>>

const sitetags: string[] = [
    'career',
    'code',
    'design',
    'personal'
] as const
export async function load({ url }) {
    const tag = url.searchParams.get('tag')
    const entries: ImportEntries = import.meta.glob<ImportMeta>('/src/routes/posts/articles/**/+page.svelte')
    const menu: { url: string, meta: SiteMeta }[] = []
    for (const entry of Object.entries(entries)) {
        const { meta } = await entry[1]()
        const posts = {
            url: entry[0].replace('+page.svelte', '').replace('/src/routes/', ''),
            meta: meta
        }
        if (tag) {
            if (sitetags.includes(tag)) {
                const tags: string[] = meta.tags
                if (tags.includes(tag)) {
                    menu.push(posts)
                }
            }
        } else {

            menu.push(posts)
        }
    }
    console.log({ menu })
    return { menu: menu.sort((x, y) => x.meta.date <= y.meta.date ? 1 : -1) }
}