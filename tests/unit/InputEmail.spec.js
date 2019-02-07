import { shallowMount } from '@vue/test-utils'
import EmailInput from '@/components/input-email.vue'

describe('components/input-email.vue', () => {
  it('feel', () => {
    const wrapper = shallowMount(EmailInput, {
      propsData: { value: 'xpto' }
    })

    // elements
    const input = wrapper.find('input[type="email"]')
    const button = wrapper.find('a')

    // test initial value
    expect(input.element.value).toBe('xpto')

    // update value
    input.setValue('xyz')

    // assert new value
    expect(input.element.value).toBe('xyz')

    // assert input event
    expect(wrapper.emitted('input')).toEqual([['xyz']])

    // trigger click in button
    button.trigger('click')

    // assert call:generate event
    expect(wrapper.emitted('call:generate').length).toBe(1)

    // update loading
    wrapper.setProps({ loading: true })

    // assert spin element
    expect(button.find('i.fas').classes('spin')).toBe(true)
  })
})
