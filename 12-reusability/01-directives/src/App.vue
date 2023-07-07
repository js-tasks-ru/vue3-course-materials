<template>
  <input v-select-on-focus="[3, 7]" value="Text Value" />
</template>

<script>
import { selectOnFocus } from './directives/selectOnFocus.js';

export default {
  name: 'App',

  directives: {
    selectOnFocus,
  },
};
</script>
