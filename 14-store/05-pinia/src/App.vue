<template>
  <div class="page-auth">
    <page-login v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import PageLogin from './components/PageLogin.vue';
import { useAuthStore } from './stores/useAuthStore.js';

const authStore = useAuthStore();
const { user, isAuthenticated } = storeToRefs(authStore);
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
