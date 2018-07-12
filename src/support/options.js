import { isString } from 'lodash-es'
const makeOptions = list => list.map(value => {
  return isString(value)
    ? { value }
    : value
})

export { makeOptions }
