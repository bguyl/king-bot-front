<template>
  <div class="signin md-layout md-gutter md-alignment-center-center">
    <form novalidate class="md-layout-item md-layout md-alignment-center-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Sign in</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.password">Password must be at least 6 characters long</span>
          </md-field>

          <md-field :class="getValidationClass('repeatPassword')">
            <label for="repeatPassword">Repeat password</label>
            <md-input type="password" name="repeatPassword" id="repeatPassword" v-model="form.repeatPassword" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.repeatPassword.repeatPassword">Passwords must be the same</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" :disabled="sending">Create</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user was created with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import Component, { mixins } from 'vue-class-component';
  import { validationMixin } from 'vuelidate';
  import {
    required,
    email,
    minLength,
    sameAs
  } from 'vuelidate/lib/validators';

  export default {
    name: 'signin',
    mixins: [validationMixin],
    data() {
      return {
        form: {
            email: null,
            password: null,
            repeatPassword: null
        },
        userSaved: false,
        sending: false
      };
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        },
        repeatPassword: {
          sameAsPassword: sameAs('password')
        }
      }
    },
    methods: {
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {'md-invalid': field.$invalid && field.$dirty};
        }
      },
      clearForm() {
        this.$v.$reset();
        this.form.email = null;
        this.form.password = null;
        this.form.repeatPassword = null;
      },
      saveUser() {
        this.sending = true;

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.userSaved = true;
          this.sending = false;
          this.clearForm();
          this.$router.push('/');
        }, 1500);
      },
      validateUser() {
        this.$v.$touch();

        if (!this.$v.$invalid) {
          this.saveUser();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .signin {
    min-height: 100vh;
    width: 100vw;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
