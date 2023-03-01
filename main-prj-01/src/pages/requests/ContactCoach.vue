<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email.val" />
      <p v-if="!email.isValid">Please enter correct email</p>
    </div>
    <div class="form-control" :class="{ invalid: !message.isValid }">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model="message.val"></textarea>
      <p v-if="!message.isValid">Please enter correct message</p>
    </div>
    <div class="action">
      <base-button>Contact</base-button>
    </div>
    <p v-if="!isFormValid">Please fix the error and submit again.</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      isFormValid: true,
    };
  },
  methods: {
    validateForm() {
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.isFormValid = false;
        this.email.isValid = false;
      }
      if (this.message.val === '') {
        this.isFormValid = false;
        this.message.isValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.isFormValid) {
        return;
      }

      this.$store.dispatch('requests/requestCoach', {
        email: this.email.val,
        message: this.message.val,
        coach_id: this.$route.params.id,
      });

      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
