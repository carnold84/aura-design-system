import { shallowMount } from '@vue/test-utils';
import Component from './AIcon.vue';

describe('AIcon', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });
});
