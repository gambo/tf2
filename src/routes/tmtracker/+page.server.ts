import {
    TRADEME_Consumerkey,
    TRADEME_ConsumerSecret,
    TRADEME_Secret,
    TRADEME_Token
} from '$env/static/private'

export async function load() {

    const url = 'https://api.tmsandbox.co.nz/v1/Search/General.json?search_string=car'

    const details = [
        'oauth_signature_method="PLAINTEXT"',
        `oauth_consumer_key="${TRADEME_Consumerkey}"`,
        `oauth_signature="${TRADEME_ConsumerSecret}&${TRADEME_Secret}"`,
        `oauth_token="${TRADEME_Token}"`,
    ]

    const a = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Oauth ${details.join(', ')}`
        }
    }).then(x => x.json())
        .then(x => x)
        .catch(console.error)

    return { a }
}