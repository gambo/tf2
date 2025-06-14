import type { Component } from "svelte"

export async function load() {
    const entries = import.meta.glob<{ default: Component, meta: SiteMeta }>('/src/routes/journal/articles/**/+page.svelte')
    const menu: { url: string, meta: SiteMeta }[] = []
    for (const entry of Object.entries(entries)) {
        const { meta } = await entry[1]()
        const journals = {
            url: entry[0].replace('+page.svelte', '').replace('/src/routes/', ''),
            meta: meta
        }
        menu.push(journals)
    }
    return { menu: menu.sort((x, y) => x.meta.date <= y.meta.date ? 1 : -1) }
}