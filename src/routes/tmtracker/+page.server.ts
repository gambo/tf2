
const Token = '24FEE9C082C05FC0D354363E1C517200'
const Secret = 'CC58E3C89642CAA0019648502B570AF5'
const Consumerkey = '36821F89C4B463E863AC72A09A4C25CC'
const ConsumerSecret = '25943CE49DAC7485A8ED64B4FA5EAFF1'
//
export async function load() {
    const url = 'https://api.tmsandbox.co.nz/v1/Search/General.json?search_string=car'

    const details = [
        `oauth_consumer_key="${Consumerkey}"`,
        `oauth_token="${Token}"`,
        'oauth_signature_method="PLAINTEXT"',
        `oauth_signature="${ConsumerSecret}&${Secret}"`,
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