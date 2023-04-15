<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <ul v-if="data.showGoal">
    <li v-for="goal in data.goals" :key="goal"> {{ goal }}</li>
  </ul>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toogleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import {reactive} from 'vue';
import {ref} from 'vue';

export default {
  setup(){
    // => Separate refs
    // const courseGoals = ref(['Learn Vue.js', 'Start contributing to the opensource project']);
    // let showGoal = ref(true);

    // => Ref Object
    const data = ref({
      goals: ['Learn Vue.js', 'Start contributing to the opensource project'],
      showGoal: true,
    });

    // => Reactive Object
    // const data = reactive({
    //   goals: ['Learn Vue.js', 'Start contributing to the opensource project'],
    //   showGoal: true,
    // })

    function toogleGoal() {
      // showGoal.value = !showGoal.value

      // data.showGoal = !data.showGoal;

      data.value.showGoal = !data.value.showGoal;
      
    }

    return {data: data, toogleGoal: toogleGoal}
    // return {goals: courseGoals, showGoal: showGoal, toogleGoal: toogleGoal}
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>