// place files you want to import through the `$lib` alias in this folder.

import type { Attachment } from "svelte/attachments";

export const sitetags = new Map([
    ['design', { color: 'var(--color-red-100)' }],
    ['development', { color: 'var(--color-green-500)' }],
    ['programming', { color: 'var(--color-blue-500)' }],
    ['experiment', { color: 'var(--color-teal-500)' }],
    ['interview', { color: 'var(--color-violet-500)' }],
    ['personal', { color: 'var(--color-orange-500)' }],
    ['design', { color: 'var(--color-yellow-500)' }],
] as const)
console.log('sitetags', sitetags);
export const poly_clip: Attachment<HTMLElement> = (node) => {
    const bound = (b: number) => Math.floor(Math.random() * b);
    const low = () => bound(3);
    const high = () => 100 - bound(3);
    const measure = [
        [low(), low()],
        [high(), low()],
        [high(), high()],
        [low(), high()]
    ];
    const polystring = measure.map((point) => `${point[0]}% ${point[1]}%`).join(', ');
    node.style.clipPath = `polygon(${polystring})`;
};

export const poly_bg: Attachment<HTMLElement> = (node) => {
    const bound = (b: number) => Math.floor(Math.random() * b);
    const low = () => bound(3);
    const high = () => 100 - bound(3);
    const measure = [
        [low(), low()],
        [high(), low()],
        [high(), high()],
        [low(), high()]
    ];
    const polystring = measure.map((point) => `${point[0]}% ${point[1]}%`).join(', ');
    const clipPath = `polygon(${polystring})`
    node.style.clipPath = clipPath;
}

export const slugify = (str: string) => {
    return str.replaceAll(/[^A-Za-z0-9]+/g, '-')
}