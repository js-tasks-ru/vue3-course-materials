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
import UiContainer from '../components/UiContainer.vue';
import UiAlert from '../components/UiAlert.vue';
import { fetchMeetup } from '../api.js';

export default {
  name: 'PageMeetup',

  components: { UiAlert, UiContainer },

  // С хуками роутера можно получить данные ещё до перехода на маршрут и рендеринга компонента маршрута
  // При этом в зависимости от результата получения данных определить, нужно ли переходить и куда

  beforeRouteEnter(to) {
    // Гард (хук) может вернуть:
    // 1. undefined | true - разрешает успешно переходить на маршрут to
    // 2. false - отменяет переход
    // 3. RouteLocationRaw (строка с путём или объект, описывающий путь) - переходит на конкретный маршрут
    // 4. (vm) => {} - разрешает успешно переходить на маршрут + вызывает после перехода callback с экземпляром компонента
    // Во всех случаях можно возвращать значение асинхронно через Promise

    return fetchMeetup(to.params.meetupId)
      .then((meetup) => {
        // Экземпляра компонента маршрута ещё нет, мы не можем к нему обратиться, нет this
        // Но вы можем передать коллбек, который выполнится с ним
        return (vm) => {
          vm.setMeetup(meetup);
        };
      })
      .catch(() => ({ name: 'meetups' }));
  },

  beforeRouteUpdate(to, from) {
    // Запрашиваем новые данные, если обновился meetupId
    if (to.params.meetupId !== from.params.meetupId) {
      this.meetup = null;
      return fetchMeetup(to.params.meetupId)
        .then((meetup) => {
          this.setMeetup(meetup);
        })
        .catch(() => ({ name: 'meetups' }));
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

  // Вместо получения meetupId из параметров маршрута сразу получаем их из входного параметра компонента с props: true

  // computed: {
  //   meetupId() {
  //     return this.$route.params.meetupId;
  //   },
  // },

  // Текущий маршрут - реактивный объект

  // watch: {
  //   meetupId: {
  //     immediate: true,
  //     handler(newMeetupId) {
  //       this.meetup = null;
  //       fetchMeetup(newMeetupId)
  //         .then((meetup) => {
  //           this.setMeetup(meetup);
  //         });
  //     },
  //   }
  // },

  // Данные можно получать традиционно после создания экземпляра компонента

  // mounted() {
  //   this.meetup = null;
  //   fetchMeetup(this.meetupId).then((meetup) => {
  //     this.setMeetup(meetup);
  //   });
  // },

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
