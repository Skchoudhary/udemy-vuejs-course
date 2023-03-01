<template>
  <base-card>
    <section>
      <coach-filter @update-filter="setFilter"></coach-filter>
    </section>
    <section>
      <div>
        <base-button>Refresh</base-button>
        <base-button v-if="!showRegisterButton" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div>
        <ul>
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
      </div>
    </section>
  </base-card>
</template>

<script>
import CoachItem from '../../components/coach/CoachItem.vue';
import CoachFilter from '../../components/coach/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      filter: {
        backend: true,
        frontend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coache) => {
        if (this.filter.frontend && coache.areas.includes('frontend')) {
          return true;
        }
        if (this.filter.backend && coache.areas.includes('backend')) {
          return true;
        }
        if (this.filter.career && coache.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    showRegisterButton() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilter(updatedFilter) {
      this.filter = updatedFilter;
    },
  },
};
</script>
