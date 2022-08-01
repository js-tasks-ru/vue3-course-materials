<template>
  <div class="page-auth">
    <page-login v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import PageLogin from './components/PageLogin.vue';
import { computed } from 'vue';

const store = useStore();

const user = computed(() => store.state.auth.user);
const isAuthenticated = computed(() => store.getters['auth/IS_AUTHENTICATED']);
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
