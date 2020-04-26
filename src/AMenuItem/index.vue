<template>
  <wrapper
    :active-class="activeClass"
    :class="{
      'is-active': isActive
    }"
  >
    <a-button
      v-bind="$props"
      alignText="left"
      :as="component"
      :class="{
        'is-sub-menu-item': isSubMenu,
        'is-sub-menu-title': isSubMenuTitle
      }"
      class="btn"
    >
      <main-content>
        <content-left v-if="$slots['content-left']">
          <slot name="content-left" />
        </content-left>
        <slot />
      </main-content>
      <slot name="content-right" />
    </a-button>
  </wrapper>
</template>

<script>
import AButton from '../AButton';
import { ContentLeft, MainContent, Wrapper } from './AMenuItem.styles';

export default {
  name: 'a-menu-item',
  components: {
    AButton,
    ContentLeft,
    MainContent,
    Wrapper,
  },
  props: {
    activeClass: {
      default: 'is-active',
      type: String,
    },
    component: {
      default: 'li',
      type: String,
    },
    isActive: {
      default: false,
      type: Boolean,
    },
    isSubMenu: {
      default: false,
      type: Boolean,
    },
    isSubMenuTitle: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
