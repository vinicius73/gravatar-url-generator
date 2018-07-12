import { sizes } from '../../gravatar/options/options'
import { makeOptions } from '../../../support/options'

// const sets = makeOptions(['set1', 'set2', 'set3', 'set4'])
const sets = [{
  value: 'set1',
  label: 'generic'
}, {
  value: 'set3',
  label: 'sexy robot'
}, {
  value: 'set2',
  label: 'monster'
}, {
  value: 'set4',
  label: 'cat'
}]

const bgsets = makeOptions([
  { label: 'none', value: '' }, 'bg1', 'bg2'
])

export { sets, bgsets, sizes }
