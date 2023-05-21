import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  // Базовый путь берём из переменной окружения
  // Он нужен не только при сборке для формирования путей загрузки статичных ресурсов (стилей, скриптов и т.д.)
  // Но и при формировании путей одно-страничного приложения
  // В Webpack тут будет process.env.BASE_URL
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'index',
      // Можно сделать два адреса одной странице
      // alias: 'meetups',
      component: () => import('../views/PageMeetups.vue'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      // Пока отдельно страницы митапов и главной нет,
      // сделаем на будущее два маршрута, но маршрут страницы митапов будет перенаправлять на главную
      redirect: { name: 'index' },
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      // Meta свойства можно использовать для добавления собственных свойств маршрута
      // Используются для изменения UI, и работе роутера, например, в гардах
      meta: {
        showReturnToMeetups: true,
      },
      // Все параметры маршрута (meetupId) будут устанавливаться соответственными пропсами компонента
      props: true,
      // Чтобы после явного программного перехода на { name: 'meetup' } отображался дочерний маршрут по умолчанию,
      // добавляем редирект на него с такими же параметрами
      redirect: (to) => ({ name: 'meetup.description', params: to.params }),
      component: () => import('../views/PageMeetup.vue'),
      children: [
        {
          // Пустой путь - путь дочернего маршрута "по умолчанию"
          path: '',
          alias: 'description',
          name: 'meetup.description',
          props: true,
          component: () => import('../views/PageMeetupDescription.vue'),
        },
        {
          // Если path не начинается с / - то это относительный путь.
          // В итоге path будет соединением с path родителя.
          path: 'agenda',
          name: 'meetup.agenda',
          // Начав path с / можно сделать новый путь, не привязанный к пути родителя,
          // но являющийся его дочерним маршрутом и соответственно в рендеринге компонентов
          // Тоже и с alias
          alias: '/agenda/:meetupId',
          props: true,
          component: () => import('../views/PageMeetupAgenda.vue'),
        },
      ],
    },
  ],
});
