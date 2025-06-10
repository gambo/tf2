import type { Component } from "svelte"

export async function load() {
    const entries = import.meta.glob<{ default: Component, meta: SiteMeta }>('./*/+page.svelte')
    const menu: { url: string, meta: SiteMeta }[] = []
    for (const entry of Object.entries(entries)) {
        const { meta } = await entry[1]()
        const journals = {
            url: entry[0],
            meta: meta
        }
        menu.push(journals)
    }
    return { menu }
}