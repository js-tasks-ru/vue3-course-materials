<template>
  <div class="agenda-item-form">
    <button type="button" class="agenda-item-form__remove-button" @click="$emit('remove')">
      <UiIcon icon="trash" />
    </button>

    <div class="form-group">
      <select v-model="localAgendaItem.type" title="Тип" @change="setAgendaItemField('type', $event.target.value)">
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="agenda-item-form__row">
      <div class="agenda-item-form__col">
        <div class="form-group">
          <label class="form-group__label">Начало</label>
          <div class="input-group">
            <input
              v-model="localAgendaItem.startsAt"
              class="form-control"
              type="time"
              placeholder="00:00"
              @change="setAgendaItemField('startsAt', $event.target.value)"
            />
          </div>
        </div>
      </div>
      <div class="agenda-item-form__col">
        <div class="form-group">
          <label class="form-group__label">Окончание</label>
          <div class="input-group">
            <input
              v-model="localAgendaItem.endsAt"
              class="form-control"
              type="time"
              placeholder="00:00"
              @change="setAgendaItemField('endsAt', $event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-group__label">Заголовок</label>
      <div class="input-group">
        <input
          v-model="localAgendaItem.title"
          class="form-control"
          @change="setAgendaItemField('title', $event.target.value)"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-group__label">Описание</label>
      <div class="input-group">
        <textarea
          v-model="localAgendaItem.description"
          class="form-control"
          @change="setAgendaItemField('description', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'MeetupAgendaItemForm',

  components: {
    UiIcon,
  },

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  emits: ['setAgendaItemField', 'remove'],

  data() {
    return {
      localAgendaItem: { ...this.agendaItem },
    };
  },

  methods: {
    setAgendaItemField(field, value) {
      this.$emit('setAgendaItemField', { field, value });
    },
  },
};
</script>

<style scoped>
.agenda-item-form {
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  position: relative;
  padding: 20px 10% 0 16px;
}

.agenda-item-form__remove-button {
  position: absolute;
  top: 4px;
  right: 0;
  box-shadow: none;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 4px;
  cursor: pointer;
  transition: 0.2s opacity;
}

.agenda-item-form__remove-button:hover {
  opacity: 0.6;
}

.agenda-item-form__row {
  display: flex;
  flex-direction: column;
}

.agenda-item-form__col + .agenda-item-form__col {
  margin-top: 16px;
}

.agenda-item-form__col:first-child {
  margin-left: 0;
}

@media all and (min-width: 992px) {
  .agenda-item-form {
    padding: 28px 25% 4px 24px;
  }

  .agenda-item-form__remove-button {
    top: 20px;
    right: 20px;
  }

  .agenda-item-form__row {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 -12px;
  }

  .agenda-item-form__col {
    flex: 1 1 auto;
    padding: 0 12px;
  }

  .agenda-item-form__col + .agenda-item-form__col {
    margin-top: 0;
  }

  .agenda-item-form__col:first-child {
    margin-left: 0;
  }
}
</style>
