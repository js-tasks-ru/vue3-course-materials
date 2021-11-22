<template>
  <div class="page-meetup">
    <!-- meetup-cover -->

    <ui-container>
      <div class="meetup">
        <div class="meetup__content">
          <!-- ... -->
        </div>
        <div class="meetup__aside">
          <!-- ... -->
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script>
import UiContainer from './UiContainer';
import UiAlert from './UiAlert';

export default {
  name: 'PageMeetup',
  components: { UiAlert, UiContainer },
};
</script>

<style scoped>
.page-meetup {
  background-color: var(--white);
}

.meetup {
  display: flex;
  flex-direction: column;
  margin: 48px 0 0;
}

.meetup__content {
}

.meetup__aside {
  margin: 40px 0;
}

.meetup__aside-buttons {
  padding: 0 0 0 34px;
  margin-top: 16px;
}

.meetup__aside-button {
  margin: 0 10px 10px 0;
}

@media all and (min-width: 992px) {
  .meetup {
    flex-direction: row;
  }

  .meetup__content {
    flex: 1 0 calc(100% - 350px);
  }

  .meetup__aside {
    flex: 1 0 350px;
    padding: 50px 0 0 44px;
    margin: 0;
  }
}
</style>
