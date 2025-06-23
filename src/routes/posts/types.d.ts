import { sitetags } from '$lib'

type SiteTags = typeof sitetags extends Map<infer T, unknown> ? T : never
type SiteDate = Date
type SiteMeta = {
    ident: string
    date: SiteDate
    image: string
    alt: string
    tags: SiteTags[]
    title: string
}
export type ImportMeta = { default: Component, meta: SiteMeta }
type MenuEntry = {
    url: string, meta: SiteMeta
}
