<template>
  <ui-container style="padding-top: 48px">
    <ui-input ref="firstNameInput" v-model="value" type="text" name="firstName" placeholder="Cat" @blur="handleBlur">
      <template v-if="showIcon" #left-icon>
        <ui-icon icon="search" />
      </template>
    </ui-input>

    <ui-input-number v-model="age" name="age" @blur="handleBlur">
      <template v-if="showIcon" #left-icon>
        <ui-icon icon="search" />
      </template>
    </ui-input-number>

    <button @click="toggleIcon">Toggle Icon</button>
    <button @click="focus">Focus</button>
    <hr />
    <p>FirstName: {{ value }}</p>
    <p>Age: {{ age }}</p>
  </ui-container>
</template>

<script>
import UiInput from './components/UiInput';
import UiContainer from './components/UiContainer.vue';
import UiIcon from './components/UiIcon.vue';
import UiInputNumber from './components/UiInputNumber.vue';

export default {
  name: 'App',

  components: {
    UiInputNumber,
    UiIcon,
    UiContainer,
    UiInput,
  },

  data() {
    return {
      value: 'Initial Text',
      age: 42,
      showIcon: true,
    };
  },

  methods: {
    toggleIcon() {
      this.showIcon = !this.showIcon;
    },

    handleBlur(event) {
      console.log('Blur', event);
    },

    focus() {
      this.$refs['firstNameInput'].focus();
    },
  },
};
</script>

<style>
@import '~@/assets/styles/_fonts.css';
@import '~@/assets/styles/_variables.css';
@import '~@/assets/styles/_common.css';
</style>
