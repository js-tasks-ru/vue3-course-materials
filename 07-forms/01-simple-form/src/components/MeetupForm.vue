<template>
  <form class="meetup-form">
    <div class="meetup-form__content">
      <fieldset class="meetup-form__section">
        <div class="form-group">
          <label class="form-group__label">Название</label>
          <div class="input-group">
            <input v-model="meetup.title" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-group__label">Место проведения</label>
          <div class="input-group">
            <input v-model="meetup.place" class="form-control" />
          </div>
        </div>
      </fieldset>

      <h3 class="meetup-form__agenda-title">Программа</h3>
      <meetup-agenda-item-form
        v-for="(agendaItem, index) in meetup.agenda"
        :key="agendaItem.id"
        :agenda-item="agendaItem"
        class="meetup-form__agenda-item"
        @remove="removeAgendaItem(index)"
      />

      <div class="meetup-form__append">
        <button class="meetup-form__append-button" type="button" @click="addAgendaItem">
          + Добавить пункт программы
        </button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside-stick">
        <button class="button button_secondary button_block meetup-form__aside-button" type="button">Cancel</button>
        <button class="button button_primary button_block meetup-form__aside-button" type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import MeetupAgendaItemForm from './MeetupAgendaItemForm.vue';

// Use negative IDs, so it won't conflict with real id
let lastId = -1;
function createAgendaItem() {
  return {
    id: lastId--,
    startsAt: '00:00',
    endsAt: '00:00',
    type: 'other',
    title: null,
    description: null,
    speaker: null,
    language: null,
  };
}

export default {
  name: 'MeetupForm',

  components: {
    MeetupAgendaItemForm,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addAgendaItem() {
      const newItem = createAgendaItem();
      this.meetup.agenda.push(newItem);
    },

    removeAgendaItem(index) {
      this.meetup.agenda.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.meetup-form__section {
  border: none;
}

.meetup-form__agenda-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: var(--body-color);
  margin: 0 0 24px 0;
}

.meetup-form__aside {
  margin: 48px 0;
}

.meetup-form__aside-button {
  margin: 0 0 12px 0;
}

.meetup-form__agenda-item + .meetup-form__agenda-item {
  margin-top: 24px;
}

.meetup-form__append {
  margin-top: 24px;
}

.meetup-form__append-button {
  box-shadow: none;
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  color: var(--blue);
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
}

.meetup-form__append-button:hover {
  text-decoration: underline;
}

@media all and (min-width: 992px) {
  .meetup-form {
    display: flex;
    flex-direction: row;
  }

  .meetup-form__content {
    flex: 1 0 calc(100% - 320px);
  }

  .meetup-form__aside {
    flex: 1 0 320px;
    max-width: 320px;
    width: 100%;
    padding-left: 137px;
    margin: 0;
  }

  .meetup-form__aside-stick {
    position: sticky;
    top: 32px;
  }
}
</style>
