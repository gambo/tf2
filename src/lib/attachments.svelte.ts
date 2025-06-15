import { codeToHtml } from "shiki";
import type { Attachment } from "svelte/attachments";

export const code: Attachment<HTMLElement> = (node) => {
    const html = $derived(
        codeToHtml(node.innerText, {
            lang: 'typescript',
            theme: 'vitesse-dark',
        }),
    );
    html.then(x => {
        node.innerHTML = x
    })
};
