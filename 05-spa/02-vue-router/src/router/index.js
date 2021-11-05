import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  // Базовый путь берём из переменной окружения
  // Он нужен не только при сборке для формирования путей загрузки статичных ресурсов (стилей, скриптов и т.д.)
  // Но и при формировании путей одно-страничного приложения
  history: createWebHistory(process.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'index',
      // alias: 'meetups', - можно было сделать два адреса одной странице
      component: () => import('../views/PageMeetups'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      // Пока отдельно страницы митапов и главной - нет
      // Сделаем на будущее два маршрута, но маршрут страницы митапов будет перенаправлять на главную
      redirect: { name: 'index' },
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      meta: {
        showReturnToMeetups: true,
      },
      // Все параметры маршрута (meetupId) будут устанавливаться соответственными пропсами компонента
      props: true,
      // Чтобы после явного программного перехода на { name: 'meetup' } отображался дочерний маршрут по умолчанию,
      // добавляем редирект на него с такими же параметрами
      redirect: (to) => ({ name: 'meetup.description', params: to.params }),
      component: () => import('../views/PageMeetup'),
      children: [
        {
          // Пустой путь - путь дочернего маршрута "по умолчанию"
          path: '',
          alias: 'description',
          name: 'meetup.description',
          // Также устанавливаем props, чтобы параметры маршрута (в этот раз переданные на <router-view>)
          // передавались во входные параметры компонента маршрута
          props: true,
          component: () => import('../views/PageMeetupDescription'),
        },
        {
          // Если path не начинается с / - то это относительный путь.
          // В итоге path будет соединением с path родителя.
          // Начав path с / можно сделать новый путь, не привязанный к пути родителя,
          // но являющийся его дочерним маршрутом и соответственно в рендеринге компонентов
          path: 'agenda',
          name: 'meetup.agenda',
          props: true,
          component: () => import('../views/PageMeetupAgenda'),
        },
      ],
    },
  ],
});
