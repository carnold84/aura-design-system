import { action } from '@storybook/addon-actions';

import AButton from './AButton';

export default { title: 'Button' };

export const button = () => ({
  components: { AButton },
  template: '<a-button>Button</a-button>',
});

export const buttonPrimary = () => ({
  components: { AButton },
  template: '<a-button :is-primary="true">Button</a-button>',
});

export const buttonClick = () => ({
  components: { AButton },
  template: '<a-button @click="handleClick">Button</a-button>',
  methods: {
    handleClick: action('Click'),
  },
});
