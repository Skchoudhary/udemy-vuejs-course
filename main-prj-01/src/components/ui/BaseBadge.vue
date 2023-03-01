<template>
  <div class="badge" :class="type">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: ['title', 'type'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
