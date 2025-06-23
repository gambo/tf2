import type { ImportMeta, MenuEntry } from './types.d.ts'

async function* get_articles() {
    const files = import.meta.glob<ImportMeta>('/src/routes/posts/**/**/+page.svelte')
    for await (const [key, value] of Object.entries(files)) {
        yield {
            done: false, value: {
                url: key,
                meta: (await value()).meta
            }
        }
    }
    return { done: true, value: undefined }
}

const prepareUrl = (url: string) => {
    return url
        .replaceAll('+page.svelte', '')
        .replaceAll('/src/routes/', '')
}

const sortByDate = (a: MenuEntry, b: MenuEntry) => {
    return a.meta.date < b.meta.date ? 1 : -1
}

export async function load() {
    const articles = get_articles()
    const menu: MenuEntry[] = []
    for await (const { value: { url, meta } } of articles) {
        if (!meta) continue
        menu.push({
            url: prepareUrl(url),
            meta,
        })
    }
    return { menu: menu.sort(sortByDate) }
}