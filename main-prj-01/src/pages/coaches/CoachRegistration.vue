<template>
  <base-card>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coach/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
