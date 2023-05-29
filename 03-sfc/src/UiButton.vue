<template>
  <button class="button" type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton',
};
</script>

<style>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4c6bb6;
  text-align: center;
  border: 4px solid #4c6bb6;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  border-color: #b8c5e2;
}
</style>
