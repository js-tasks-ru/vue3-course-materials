<template>
  <form class="meetup-form" @submit.prevent="handleSubmit">
    <div class="meetup-form__content">
      <fieldset class="meetup-form__section">
        <UiFormGroup label="Название">
          <UiInput v-model="localMeetup.title" name="title" />
        </UiFormGroup>
        <UiFormGroup label="Дата">
          <UiInputDate v-model="localMeetup.date" type="date" name="date" />
        </UiFormGroup>
        <UiFormGroup label="Место">
          <UiInput v-model="localMeetup.place" name="place" />
        </UiFormGroup>
        <UiFormGroup label="Описание">
          <UiInput v-model="localMeetup.description" multiline rows="3" name="description" />
        </UiFormGroup>
        <UiFormGroup label="Изображение">
          <UiImageUploader
            name="image"
            :preview="localMeetup.image"
            @select="localMeetup.imageToUpload = $event"
            @remove="localMeetup.imageId = localMeetup.imageToUpload = null"
          />
        </UiFormGroup>
      </fieldset>

      <h3 class="meetup-form__agenda-title">Программа</h3>
      <MeetupAgendaItemForm
        v-for="(agendaItem, index) in localMeetup.agenda"
        :key="agendaItem.id"
        v-model:agenda-item="localMeetup.agenda[index]"
        class="meetup-form__agenda-item"
        @remove="removeAgendaItem(index)"
      />

      <div class="meetup-form__append">
        <button class="meetup-form__append-button" type="button" data-test="addAgendaItem" @click="addAgendaItem">
          + Добавить этап программы
        </button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside-stick">
        <UiButton
          class="meetup-form__aside-button"
          block
          data-test="cancel"
          variant="secondary"
          @click="$emit('cancel')"
        >
          Отмена
        </UiButton>
        <UiButton variant="primary" block class="meetup-form__aside-button" type="submit" data-test="submit">
          {{ submitText }}
        </UiButton>
      </div>
    </div>
  </form>
</template>

<script>
import { klona } from 'klona';
import UiButton from './UiButton.vue';
import UiFormGroup from './UiFormGroup.vue';
import UiImageUploader from './UiImageUploader.vue';
import UiInput from './UiInput.vue';
import UiInputDate from './UiInputDate.vue';
import MeetupAgendaItemForm from './MeetupAgendaItemForm.vue';
import { createAgendaItem } from '../services/meetupService.js';

export default {
  name: 'MeetupForm',

  components: {
    MeetupAgendaItemForm,
    UiButton,
    UiFormGroup,
    UiImageUploader,
    UiInput,
    UiInputDate,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },

    submitText: {
      type: String,
      default: '',
    },
  },

  emits: ['submit', 'cancel'],

  data() {
    return {
      localMeetup: klona(this.meetup),
    };
  },

  methods: {
    addAgendaItem() {
      const newItem = createAgendaItem();
      if (this.localMeetup.agenda.length) {
        newItem.startsAt = this.localMeetup.agenda[this.localMeetup.agenda.length - 1].endsAt;
      }
      this.localMeetup.agenda.push(newItem);
    },

    removeAgendaItem(index) {
      this.localMeetup.agenda.splice(index, 1);
    },

    handleSubmit() {
      this.$emit('submit', klona(this.localMeetup));
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
