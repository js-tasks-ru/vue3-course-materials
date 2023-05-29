<template>
  <div class="app">
    <!-- В шаблоне можно использовать require -->
    <img :src="require('./assets/images/undraw_conference_speaker_6nt7.svg')" width="100" />
    <!-- Но в src и url он добавляется автоматически -->
    <!-- Тут src заменится на путь в собранном приложении, а data-src останется исходным -->
    <img src="./assets/images/undraw_conference_speaker_6nt7.svg" data-src="./assets/images/undraw_conference_speaker_6nt7.svg" width="100" />

    <p>
      <UiText text="Красный текст" color="red" />
    </p>

    <p>
      <button class="button">
        <span class="content">Обычная кнопка</span>
      </button>
    </p>

    <p>
      UiButton
      <UiButton>
        <span class="content">Button Slot Content</span>
      </UiButton>
    </p>

    <p>
      UiButtonCssScoped
      <UiButtonCssScoped>
        <span class="content">Button Slot Content</span>
      </UiButtonCssScoped>
    </p>

    <p>
      UiButtonCssModule
      <UiButtonCssModule>
        <span class="content">Button Slot Content</span>
      </UiButtonCssModule>
    </p>
  </div>
</template>

<script>
import UiButton from './UiButton.vue';
import UiText from './UiText.vue';
import UiButtonCssScoped from './UiButtonCssScoped.vue';
import UiButtonCssModule from './UiButtonCssModule.vue';
import Image from './assets/images/undraw_conference_speaker_6nt7.svg';

// Импортированный файл типа asset превращается в путь до файла в собранном приложении
console.log('Image: ', Image);

export default {
  name: 'App',
  components: { UiButtonCssModule, UiButtonCssScoped, UiText, UiButton },
};
</script>

<style>
.app {
  /* CSS Nesting (вложенные правила) работают в не поддерживающих браузерах за счёт Post CSS */
  & p {
    margin: 1rem 0;
  }
}
</style>
