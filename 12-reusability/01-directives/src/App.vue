<template>
  <input value="Text Value" @focus="handleFocus" />
</template>

<script>
export default {
  name: 'App',

  methods: {
    handleFocus($event) {
      $event.currentTarget.setSelectionRange(0, -1);
    },
  },
};
</script>
