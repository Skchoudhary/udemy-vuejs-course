<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/requests" >Requests</router-link></li>
        <li v-else><router-link to="/auth" >Login</router-link></li>
        <li v-if="isLoggedIn"><base-button @click="logout" >Logout</base-button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed:{
    isLoggedIn(){
      return this.$store.getters.isLoggedIn
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>