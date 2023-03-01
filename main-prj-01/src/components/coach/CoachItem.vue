<template>
  <h1>
    {{ fullName }}
  </h1>
  <h2>${{ rate }}/hour</h2>
  <base-badge
    v-for="area in areas"
    :key="area"
    :title="area"
    :type="area"
  ></base-badge>
  <div>
    <base-button link :to="coachContactLink">Contact Coach</base-button>
    <base-button link :to="coachDetailLink">Coach Details</base-button>
  </div>
</template>
<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: {
    id: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    rate: {
      type: Number,
    },
    areas: {
      type: Array,
    },
  },
  name: 'CoachItem',
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>
