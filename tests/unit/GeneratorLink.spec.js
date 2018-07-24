import { shallowMount } from '@vue/test-utils'
import Image from '@/components/generator-link.vue'

describe('components/generator-link.vue', () => {
  it('render anchor', () => {
    const href = 'https://gravatar.com'

    const wrapper = shallowMount(Image, {
      propsData: { href }
    })
    const anchor = wrapper.find('a')

    expect(anchor.attributes().href).toBe(href)
    expect(anchor.text()).toBe(href)
  })
})
