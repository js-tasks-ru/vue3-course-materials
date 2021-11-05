<template>
  <h1 class="logo">
    <router-link :to="{ name: 'index' }" class="logo__link"
      ><img src="@/assets/logo.svg" alt="Meetups" class="logo__image" width="174" height="30"
    /></router-link>
  </h1>
</template>

<script>
export default {
  name: 'MeetupsLogo',
};
</script>

<style scoped>
.logo,
.logo__link {
  display: block;
  font-weight: 900;
  font-size: 34px;
  line-height: 30px;
  text-align: center;
  margin: 0 0 24px;
  text-transform: uppercase;
  color: var(--body-color);
  text-decoration: none;
}
</style>
