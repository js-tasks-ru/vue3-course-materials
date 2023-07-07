<template>
  <div class="toaster">
    <div v-if="message" class="toast toast_success">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheToaster',

  data() {
    return {
      message: null,
    };
  },

  methods: {
    toast(message) {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 2000);
    },
  },
};
</script>

<style>
@import '../../assets/styles/_toaster.css';
</style>
