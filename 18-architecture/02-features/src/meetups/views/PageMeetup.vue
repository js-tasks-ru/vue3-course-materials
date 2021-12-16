<template>
  <div class="page-meetup">
    <h1 style="text-align: center">
      Meetup Page {{ meetupId }} <br />
      <router-link :to="{ name: 'meetup', params: { meetupId: +meetupId + 1 } }">
        Перейти к следующему митапу
      </router-link>
    </h1>

    <!-- meetup-cover -->

    <ui-container>
      <div class="meetup">
        <div class="meetup__content">
          <template v-if="meetup">
            <h2>{{ meetup.title }}</h2>
            <p>
              <router-link :to="{ name: 'meetup.description', params: { meetupId } }">Description</router-link>
            </p>
            <p>
              <router-link :to="{ name: 'meetup.agenda', params: { meetupId } }">Agenda</router-link>
            </p>
            <!--            -->
            <router-view :meetup="meetup" />
          </template>
        </div>
        <div class="meetup__aside">
          <!-- ... -->
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script>
import UiContainer from '../../shared/components/UiContainer.vue';
import UiAlert from '../../shared/components/UiAlert.vue';
import { getMeetup } from '../api/meetupsApi';

export default {
  name: 'PageMeetup',

  components: { UiAlert, UiContainer },

  beforeRouteEnter(to) {
    return getMeetup(+to.params.meetupId).then(({ success, result: meetup }) => {
      if (success) {
        return (vm) => {
          vm.setMeetup(meetup);
        };
      } else {
        return { name: 'meetups' };
      }
    });
  },

  beforeRouteUpdate(to, from) {
    if (to.params.meetupId !== from.params.meetupId) {
      this.meetup = null;
      return getMeetup(+to.params.meetupId).then(({ success, result: meetup }) => {
        if (success) {
          this.setMeetup(meetup);
        } else {
          return { name: 'meetups' };
        }
      });
    }
    return true;
  },

  props: {
    meetupId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
    };
  },

  methods: {
    setMeetup(meetup) {
      this.meetup = meetup;
    },
  },
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
