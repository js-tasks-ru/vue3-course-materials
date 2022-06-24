import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Имитируем простое API, запрашиваем данные с JSON файла
const fetchMeetups = () => fetch('./api/meetups.json').then((res) => res.json());

// Описываем корневой компонент - всё наше приложение.
// Функция defineComponent здесь ничего не делает и просто возвращает объект, как есть, но одновременно с этим
// помогает инструментам разработки (IDE, Eslint, TS) понять, что здесь описан компонент, а не любой объект.
// Компонент - это объект с ОПЦИЯМИ.
const App = defineComponent({
  // Имя позволяет программно получать имя компонента.
  // Используется в devtools,
  name: 'App',

  // Реактивные данные приложения, его локальное состояние
  // Опция data возвращает объект с начальными данными компонента
  data() {
    return {
      // Для экспериментов
      hello: '<h1><b>world</b></h1>',

      // Массив митапов. Изначально его нет - явно указываем отсутствие данных
      meetups: null,

      // filteredMeetups: null,
      // Вместо хранения отдельно начального списка и отдельно отфильтрованного
      // будем вычислять отфильтрованный на основе начального

      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },

      // Представление - список или календарь
      view: 'list',
    };
  },

  // Вычисляемые свойства позволяют получать свойства, значение которых автоматически вычисляется на основе других реактивных свойств
  computed: {
    // Вычислим отфильтрованный список митапов
    filteredMeetups() {
      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter((meetup) => dateFilter(meetup) && participationFilter(meetup) && searchFilter(meetup));
    },
  },

  // Можно вручную отслеживать изменение реактивных данных
  // Но нам это не потребовалось, так как всю работу за нас делает computed
  // watch: {
  //   hello(newValue, oldValue) {
  //     console.log(newValue, oldValue);
  //   },
  //   filter: {
  //     deep: true,
  //     handler() {
  //       this.filterMeetups();
  //     },
  //   },
  //   meetups: {
  //     deep: true,
  //     immediate: true,
  //     handler() {
  //       this.filterMeetups();
  //     },
  //   },
  // },

  // Как только приложение будет смонтировано - запрашиванием данные
  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetups = meetups;
    });
  },

  methods: {
    // Обработчики событий обычно лучше описывать отдельными методами, если они не совсем примитивные.
    // handleInput(event) {
    //   this.filter.search = event.target.value;
    // },
    // Но обработчики событий размером в одну операцию можно описать и сразу в шаблоне.

    // Для форматирования вывода - допустимо использовать методы в шаблоне.
    // Для больших вычислений - не оптимально и не декларативно.
    // Для вычислений с побочными эффектами - запрещено.
    formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0];
    },
  },

  // Можно писать шаблон прямо здесь строкой, а можно взять его из DOM
  // template: `<div> ...`,
  // template: `#template`,
  // template: document.getElementById('template'),

  // Шаблон не указан, так как он находится в том же узле, куда будет монтироваться приложение
});

// Создаём новое приложение по корневому компоненту
const app = createApp(App);
// app - абстракция "Vue приложение",
// которая используется для настройки приложения: установки плагинов, глобальных регистраций и прочей конфигурации

// Монтируем приложение на странице в элемент с id="app".
// В этом же элементе находится шаблон.
// Так как template в компоненте не указан, Vue возьмёт шаблон из #app, удалит из DOM и смонтирует туда готовое приложение.
// Возвращается публичный экземпляр корневого компонента
const vm = app.mount('#app');

// Добавляем vm в глобальные переменные для простой отладки в консоли браузера. (!) Только для экспериментов (!)
window.vm = vm;
// Правильная альтернатива - использовать vue-devtools.
// В них можно выбрать приложение, кликнуть на экземпляр компонента и обращаться к нему в консоли:
// $vm или $vm0 - внутренний экземпляр компонента
// $vm.proxy - публичный экземпляр компонента
