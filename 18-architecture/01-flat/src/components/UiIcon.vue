<template>
  <img class="icon" :alt="icon" :src="iconSrc" />
</template>

<script>
const icons = {
  'alert-circle': require('@/assets/icons/icon-alert-circle.svg'),
  'cal-sm': require('@/assets/icons/icon-cal-sm.svg'),
  'cal-lg': require('@/assets/icons/icon-cal-lg.svg'),
  check: require('@/assets/icons/icon-check.svg'),
  'check-circle': require('@/assets/icons/icon-check-circle.svg'),
  'chevron-down': require('@/assets/icons/icon-chevron-down.svg'),
  clock: require('@/assets/icons/icon-clock.svg'),
  coffee: require('@/assets/icons/icon-coffee.svg'),
  key: require('@/assets/icons/icon-key.svg'),
  list: require('@/assets/icons/icon-list.svg'),
  map: require('@/assets/icons/icon-map.svg'),
  'pen-tool': require('@/assets/icons/icon-trash.svg'),
  'pill-active': require('@/assets/icons/icon-pill-active.svg'),
  search: require('@/assets/icons/icon-search.svg'),
  trash: require('@/assets/icons/icon-trash.svg'),
  tv: require('@/assets/icons/icon-tv.svg'),
  user: require('@/assets/icons/icon-user.svg'),
};

export default {
  name: 'UiIcon',

  props: {
    icon: {
      type: String,
      required: true,
      validator: (name) => Object.keys(icons).includes(name),
    },
  },

  computed: {
    iconSrc() {
      return icons[this.icon];
    },
  },
};
</script>

<style scoped>
.icon {
  display: block;
}
</style>
