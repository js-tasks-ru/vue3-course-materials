<template>
  <!-- Проксирование атрибутов в этот раз не требуется, так как UiInput - корневой элемент, атрибуты наследуются сами -->
  <!-- Но в Vue 2 потребовалось бы также проксировать атрибуты с v-bind="$attrs" (и события с v-on="$listeners") -->
  <UiInput ref="uiInput" v-model="modelProxy" type="number">
    <!-- Проксирование всех слотов -->
    <!-- Все переданные слоты передаются в оборачиваемый компоненте -->
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>

    <!-- Альтернативное решение - дублирование каждого слота индивидуально -->
    <!-- + Более явно -->
    <!-- - Дублирование кода -->
    <!-- - Требуется редактировать при обновлениях оборачиваемого компонента -->
    <!-- Важно не забыть про v-if, иначе будут передаваться пустые слоты -->
    <!--
    <template v-if="$slots['left-icon']" #left-icon>
      <slot name="left-icon" />
    </template>
    -->
  </UiInput>
</template>

<script>
import UiInput from './UiInput.vue';
export default {
  name: 'UiInputNumber',

  components: { UiInput },

  props: {
    // Можно явно прописать, что компонент имеет те же параметры, что и оборачиваемый компонент
    // + Явно прописанный интерфейс
    // - Нужно вручную пробрасывать все общие параметры, наследование уже не подойдёт
    // ...UiInput.props,

    modelValue: {
      type: Number,
    },
  },

  emits: ['update:modelValue'],

  expose: ['focus'],

  computed: {
    // Проксирование модели с дополнительной логикой работы с моделью именно этого компонента
    modelProxy: {
      get() {
        return this.modelValue.toString();
      },

      set(value) {
        this.$emit('update:modelValue', Number(value));
      },
    },
  },

  // Методы нужно проксировать вручную
  methods: {
    focus() {
      return this.$refs.uiInput.focus();
    },
  },
};
</script>

<style></style>
