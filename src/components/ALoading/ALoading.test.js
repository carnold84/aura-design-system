import { shallowMount } from '@vue/test-utils';
import Component from './ALoading.vue';

describe('ALoading', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });
});
