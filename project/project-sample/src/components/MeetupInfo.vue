<template>
  <div>Task 02-components/03-MeetupInfo</div>
</template>

<script>
// TODO: Task 02-components/03-MeetupInfo
// TODO: Add <UiIcon>
// TODO: Add date utils

export default {
  name: 'MeetupInfo',
};
</script>

<style scoped>
/* _meetup-info.css */

.meetup-info {
  margin: 0;
  padding: 0;
}

.meetup-info li {
  list-style-type: none;
  position: relative;
  padding-left: 36px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 8px;
}

.meetup-info li:last-child {
  margin: 0;
}

.meetup-info__icon {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
