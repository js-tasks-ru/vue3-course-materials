<template>
  <UiForm>
    <UiFormGroup label="Email">
      <UiInput v-model="email" name="email" type="email" placeholder="demo@email" required />
    </UiFormGroup>
    <UiFormGroup label="Пароль">
      <UiInput v-model="password" name="password" type="password" placeholder="password" required />
    </UiFormGroup>

    <template #buttons>
      <UiButton variant="primary" type="submit" block>Войти</UiButton>
    </template>

    <template #append> Нет аккаунта? <UiLink to="/register" class="link">Зарегистрируйтесь</UiLink> </template>
  </UiForm>
</template>

<script>
// TODO: Task 05-vue-router/01-AuthPages
// TODO: Добавить именованные маршруты
import { ref } from 'vue';
import UiFormGroup from '../components/UiFormGroup.vue';
import UiLink from '../components/UiLink.vue';
import UiInput from '../components/UiInput.vue';
import UiButton from '../components/UiButton.vue';
import UiForm from '../components/UiForm.vue';

export default {
  name: 'PageLogin',

  components: {
    UiForm,
    UiButton,
    UiInput,
    UiLink,
    UiFormGroup,
  },

  setup() {
    // TODO: <title> "Вход | Meetups"
    // TODO: Добавить LayoutAuth

    /*
      TODO: Добавить обработчик сабмита
            - В случае успешной аутентификации:
              - Перейти на главную страницу или from (Task 05-vue-router/01-AuthPages)
              - Вывести тост "Авторизация прошла успешно"
            - В случае неуспешной аутентификации:
              - Вывести тост "Неверные учётные данные..."
     */

    const email = ref('');
    const password = ref('');

    return {
      email,
      password,
    };
  },
};
</script>

<style scoped></style>
