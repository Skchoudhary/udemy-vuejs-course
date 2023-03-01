<template>
  <form @submit.prevent="submitForm">
    <section class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="fristName">First Name</label>
      <input
        id="fristName"
        type="text"
        v-model="firstName.val"
        @blur="changeValid('firstName')"
      />
      <p v-if="!firstName.isValid">First name cannot be empty.</p>
    </section>
    <section class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        v-model="lastName.val"
        @blur="changeValid('lastName')"
      />
      <p v-if="!lastName.isValid">Last name cannot be empty.</p>
    </section>
    <section class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model="description.val"
        @blur="changeValid('description')"
      ></textarea>
      <p v-if="!description.isValid">Description cannot be empty.</p>
    </section>
    <section class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Rate</label>
      <input
        id="rate"
        type="number"
        v-model="rate.val"
        @blur="changeValid('rate')"
      />
      <p v-if="!rate.isValid">Rate should be greater then zero.</p>
    </section>
    <section class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Area of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="changeValid('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="changeValid('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="changeValid('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">Please select one expertise.</p>
    </section>
    <p v-if="!isFormValid">Please fix the errors and submit the form again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      isFormValid: true,
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
    };
  },
  methods: {
    changeValid(component) {
      this[component].isValid = true;
      this.isFormValid = true;
    },
    validateForm() {
      if (this.firstName.val === '') {
        this.isFormValid = false;
        this.firstName.isValid = false;
      }
      if (this.lastName.val === '') {
        this.isFormValid = false;
        this.lastName.isValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.isFormValid = false;
        this.rate.isValid = false;
      }
      if (this.description.val === '') {
        this.isFormValid = false;
        this.description.isValid = false;
      }
      if (this.areas.val.length === 0) {
        this.isFormValid = false;
        this.areas.isValid = false;
      }
      return this.isFormValid;
    },
    submitForm() {
      if (!this.validateForm()) {
        return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>