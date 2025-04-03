import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../CounterComp.vue'

describe('Counter 组件', () => {
  it('正确渲染初始值', () => {
    const wrapper = mount(Counter, {
      props: {
        initialValue: 5
      }
    })

    expect(wrapper.find('.counter-display').text()).toBe('5')
    expect(wrapper.find('h2').text()).toBe('计数器组件')
  })

  it('点击增加按钮时正确增加计数', async () => {
    const wrapper = mount(Counter, {
      props: {
        initialValue: 0,
        step: 2
      }
    })

    await wrapper.find('.increment').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('2')

    await wrapper.find('.increment').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('4')
  })

  it('点击减少按钮时正确减少计数', async () => {
    const wrapper = mount(Counter, {
      props: {
        initialValue: 10,
        step: 3
      }
    })

    await wrapper.find('.decrement').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('7')

    await wrapper.find('.decrement').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('4')
  })

  it('点击重置按钮时正确重置计数', async () => {
    const wrapper = mount(Counter, {
      props: {
        initialValue: 5
      }
    })

    await wrapper.find('.increment').trigger('click')
    await wrapper.find('.increment').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('7')

    await wrapper.find('.reset').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('5')
  })

  it('使用默认值正确渲染', async () => {
    const wrapper = mount(Counter)
    expect(wrapper.find('.counter-display').text()).toBe('0')

    // 测试默认步长为1
    await wrapper.find('.increment').trigger('click')
    expect(wrapper.find('.counter-display').text()).toBe('1')
  })
})
