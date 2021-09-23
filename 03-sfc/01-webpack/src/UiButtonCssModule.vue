<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButtonCssModule',
};
</script>

<style module>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4c6bb6;
  text-align: center;
  border: 4px solid #24a37e;
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

/* Не работает, root будет заменён на хэш */
.button .root {
  color: green;
}

/* Не работает, deep будет заменён на хэш */
.button .deep {
  color: green;
}

/* Работает через global */
.button :global(.deep) {
  color: red;
  text-decoration: underline;
}
</style>
