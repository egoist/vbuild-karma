import Vue from 'vue'
import Counter from './Counter.vue'

describe('main', () => {
  it('test', () => {
    const vm = new Vue(Counter).$mount()
    expect(vm.count).toBe(0)
  })
})
