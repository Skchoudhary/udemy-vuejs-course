<template>
  <h2>{{ userDetails.username }}</h2>
  <h3>{{ userDetailse.age }}</h3>
</template>

<script lang="ts">
export default ActiveUserComponents({
  data: () => {
    return {
      userDetails: [
        {
          username: "Sandeep",
          age: 27,
        },
      ],
    };
  },
});
</script>
