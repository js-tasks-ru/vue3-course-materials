<template>
  <div class="page-auth">
    <page-login v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script setup>
import PageLogin from './components/PageLogin.vue';
import { useAuth } from './composables/useAuth.js';

const { user, isAuthenticated } = useAuth();
</script>

<style>
@import '@/assets/styles/_fonts.css';
@import '@/assets/styles/_variables.css';
@import '@/assets/styles/_common.css';
</style>
