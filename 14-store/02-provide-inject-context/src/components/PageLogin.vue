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

<script>
export default {
  name: 'PageLogin',

  inject: ['login'],

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  methods: {
    handleSubmit() {
      this.login(this.email, this.password).catch((err) => alert(err.message));
    },
  },
};
</script>
