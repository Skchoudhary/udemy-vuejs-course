<template>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
  <p>{{ error }}</p>
  </base-dialog>
  <base-card>
    <section>
      <coach-filter @update-filter="setFilter"></coach-filter>
    </section>
    <section>
      <div class="controls">
        <base-button @click="loadCoaches">Refresh</base-button>
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
        <base-button v-if="isLoggedIn && !showRegisterButton" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
        <ul v-else-if="hasCoaches">
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
        <h3 v-else>No Coaches found</h3>
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
      error: null,
      isLoading: false,
      filter: {
        backend: true,
        frontend: true,
        career: true,
      },
    };
  },
  computed: {
    hasCoaches(){
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
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
    isLoggedIn(){
      return this.$store.getters.isLoggedIn;
    },
    showRegisterButton() {
      return !this.isLoading && this.$store.getters['coaches/isCoach'];
    },
    
  },
  created(){
    this.loadCoaches();
  },
  methods: {
    setFilter(updatedFilter) {
      this.filter = updatedFilter;
    },
    async loadCoaches(){
      this.isLoading = true;
      try{
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (error){
        this.error = error;
      }

      this.isLoading = false;
    },
    handleError(){
      this.error  = null;
    }
  },
};
</script>
