import { shallowMount } from '@vue/test-utils'
import Image from '@/components/image.vue'

describe('components/image.vue', () => {
  it('add props', () => {
    const src = 'https://gravatar.com/avatar/f803c45d62a468e0cb990398c004bd3e'
    const email = 'xpto'

    const wrapper = shallowMount(Image, {
      propsData: { src, email }
    })
    const attributes = wrapper.attributes()

    expect(attributes.src).toMatch(src)
    expect(attributes.title).toMatch(email)
  })
})
