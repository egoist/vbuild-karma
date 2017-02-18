import Vue from 'vue'
import Counter from './Counter.vue'

describe('main', () => {
  it('vm.count should be 0', () => {
    const vm = new Vue(Counter).$mount()
    expect(vm.count).toBe(0)
  })
})
