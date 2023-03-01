<template>
  <base-card>
    <header>
      <h2>Recieved Requets</h2>
    </header>
    <ul v-if="hasRequests">
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
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>
