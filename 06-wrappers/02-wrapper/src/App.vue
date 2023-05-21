<template>
  <UiContainer style="padding-top: 48px">
    <UiInput v-model="value" type="text" name="firstName" placeholder="Cat" @blur="handleBlur">
      <template v-if="showIcon" #left-icon>
        <UiIcon icon="search" />
      </template>
    </UiInput>

    <UiInputNumber ref="ageInput" v-model="age" name="age" @blur="handleBlur">
      <template v-if="showIcon" #left-icon>
        <UiIcon icon="search" />
      </template>
    </UiInputNumber>

    <label>
      <input v-model="showIcon" type="checkbox" /> showIcon
    </label>
    <button @click="focus">Set Focus</button>
    <hr />
    <p>FirstName: {{ value }}</p>
    <p>Age: {{ age }}</p>
  </UiContainer>
</template>

<script>
import UiInput from './components/UiInput.vue';
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
    handleBlur(event) {
      console.log('Blur', event);
    },

    focus() {
      this.$refs.ageInput.focus();
    },
  },
};
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
