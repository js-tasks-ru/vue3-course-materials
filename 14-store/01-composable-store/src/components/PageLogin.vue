<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2 class="page-auth__title">Вход</h2>

    <div class="form-group">
      <label class="form-group__label">Email</label>
      <div class="input-group">
        <input v-model="email" class="form-control" name="email" type="email" placeholder="demo@email" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-group__label">Password</label>
      <div class="input-group">
        <input v-model="password" class="form-control" name="password" type="password" placeholder="password" />
      </div>
    </div>

    <div class="form__buttons">
      <button class="button button_primary">Login</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth.js';

const { login } = useAuth();

const email = ref('demo@email');
const password = ref('password');
const handleSubmit = () => {
  login(email.value, password.value).catch((err) => alert(err.message));
};
</script>
