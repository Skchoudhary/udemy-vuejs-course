<template>
  <router-link v-if="link" :to="to" :class="mode">
    <slot></slot>
  </router-link>
  <button :class="mode" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      Required: false,
      default: '/',
    },
    link: {
      type: Boolean,
      Required: false,
      default: false,
    },
    mode: {
      type: String,
      Required: false,
      default: null,
    },
  },
};
</script>
