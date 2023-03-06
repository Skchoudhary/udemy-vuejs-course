<template>
  <base-dialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-card>
    <header>
      <h2>Recieved Requets</h2>
    </header>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasRequests && !isLoading">
      <request-item
        v-for="request in receivedRequests"
        :key="request.id"
        :email="request.email"
        :message="request.message"
      ></request-item>
    </ul>
    <h3 v-else>No requests received yet!</h3>
  </base-card>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: { RequestItem },
  data(){
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods:{
    async loadRequests(){
      this.isLoading = true;
      try{
        await this.$store.dispatch('requests/loadRequests')
      }
      catch(error){
        this.error = error || 'Something went wrong!'
      }
      this.isLoading = false;
    },
    handleError(){
      this.error= null;
    }
  }
};
</script>
