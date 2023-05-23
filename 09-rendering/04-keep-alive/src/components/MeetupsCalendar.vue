<template>
  <div class="meetups-calendar">
    <h2>Календарь митапов</h2>
    <h3>Месяц: {{ month }} <button @click="nextMonth">Следующий месяц</button></h3>
    <p>Всего митапов: {{ meetups.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      month: 1,
    };
  },

  methods: {
    nextMonth() {
      this.month += 1;
    },
  },
};
</script>

<style scoped></style>
