const makeOptions = list => list.map(value => ({ value }))

const fallbacks = makeOptions(['404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'])
const ratings = makeOptions(['g', 'pg', 'r', 'x'])
const sizes = makeOptions(['200', '400', '600', '800'])

export { fallbacks, ratings, sizes }
