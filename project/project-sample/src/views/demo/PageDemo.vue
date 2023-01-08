<template>
  <div style="padding: 70px 0; display: flex; align-content: stretch; gap: 1rem">
    <div style="display: flex; flex: 1 0">
      <nav style="position: sticky; top: 1rem; max-height: 100vh; overflow-y: auto; margin-left: auto; padding: 0 1rem">
        <div v-for="(components, section) in toc" :key="section">
          <h3>{{ section }}</h3>
          <ul style="list-style: none; padding-left: 1rem">
            <li v-for="name in components" :key="name" style="margin: 0.25rem 0">
              <UiLink :to="{ hash: `#${name}` }">{{ name }}</UiLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <UiContainer>
      <UiPageTitle>Components Demo</UiPageTitle>

      <DemoSection section="Basic components">
        <DemoComponent name="UiAlert">
          <UiAlert>
            <h3>Error</h3>
            <div>Alert message</div>
          </UiAlert>
        </DemoComponent>

        <DemoComponent name="UiBadge" section="Basic Components">
          <div class="row">
            <div class="col">
              <UiBadge type="primary">primary</UiBadge>
            </div>
            <div class="col">
              <UiBadge type="success">success</UiBadge>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiCalendarView + UiCalendarEvent">
          <UiCalendarView v-slot="{ date }">
            <UiCalendarEvent v-if="date === 1">UiCalendarEvent</UiCalendarEvent>
          </UiCalendarView>
        </DemoComponent>

        <DemoComponent name="UiCard">
          <UiCard>
            <template #header>
              <h3>Header</h3>
            </template>
            <template #default>Any content</template>
          </UiCard>
        </DemoComponent>

        <DemoComponent name="UiContainer">
          <UiContainer>
            Контент в контейнере имеет горизонтальные отступы и ограниченную максимальную ширину для комфортного
            просмотра
          </UiContainer>
        </DemoComponent>

        <DemoComponent name="UiIcon">
          <div class="row">
            <div class="col">
              <span class="icon-sample-container"
                ><UiIcon class="icon-sample" icon="alert-circle" /> - alert-circle</span
              >
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="cal-sm" /> - cal-sm</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="cal-lg" /> - cal-lg</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="check" /> - check</span>
              <span class="icon-sample-container"
                ><UiIcon class="icon-sample" icon="check-circle" /> - check-circle</span
              >
              <span class="icon-sample-container"
                ><UiIcon class="icon-sample" icon="chevron-down" /> - chevron-down</span
              >
            </div>
            <div class="col">
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="clock" /> - clock</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="coffee" /> - coffee</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="key" /> - key</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="list" /> - list</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="map" /> - map</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="pen-tool" /> - pen-tool</span>
            </div>
            <div class="col">
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="pill-active" /> - pill-active</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="search" /> - search</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="trash" /> - trash</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="tv" /> - tv</span>
              <span class="icon-sample-container"><UiIcon class="icon-sample" icon="user" /> - user</span>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiLink">
          <UiLink tag="a" href="#">Link to this page</UiLink>
        </DemoComponent>

        <DemoComponent name="UiPageTitle">
          <UiPageTitle>PageTitle</UiPageTitle>
        </DemoComponent>

        <DemoComponent name="UiTabs">
          <UiTabs>
            <template #tabs>
              <UiTab to="#tab1">Tab 1</UiTab>
              <UiTab to="#tab2">Tab 2</UiTab>
            </template>
            Tab Content
          </UiTabs>
        </DemoComponent>

        <DemoComponent name="UiTransitionFade">
          <div class="row">
            <div class="col">
              <UiButton @click="show = !show">Toggle</UiButton>
            </div>
            <div class="col">
              <UiTransitionFade>
                <div v-if="show">UiTransitionFade</div>
              </UiTransitionFade>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiTransitionGroupFade">
          <div class="row">
            <div class="col">
              <UiInput v-model="count" type="number" />
            </div>
            <div class="col">
              <UiTransitionGroupFade>
                <div v-for="i in +count" :key="i">{{ i }}</div>
              </UiTransitionGroupFade>
            </div>
          </div>
        </DemoComponent>
      </DemoSection>

      <DemoSection section="Forms">
        <DemoComponent name="UiButton">
          <div class="row">
            <div class="col">
              <UiButton variant="primary">primary</UiButton>
            </div>
            <div class="col">
              <UiButton variant="secondary">secondary</UiButton>
            </div>
            <div class="col">
              <UiButton variant="danger">danger</UiButton>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <UiButton block>block</UiButton>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiButtonGroup+UiButtonGroupItem">
          <div class="row">
            <div class="col">
              <UiButtonGroup v-model="selected">
                <UiButtonGroupItem value="1">One</UiButtonGroupItem>
                <UiButtonGroupItem value="2">Two</UiButtonGroupItem>
              </UiButtonGroup>
            </div>
            <div class="col">
              <UiButtonGroup v-model="view">
                <UiButtonGroupItem value="list">
                  <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clip-rule="evenodd"
                      d="m5 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h.01c.55228 0 1-.44772 1-1s-.44772-1-1-1zm5 0c-.55228 0-1 .44772-1 1s.44772 1 1 1h13c.5523 0 1-.44772 1-1s-.4477-1-1-1zm0 6c-.55228 0-1 .4477-1 1s.44772 1 1 1h13c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-1 7c0-.5523.44772-1 1-1h13c.5523 0 1 .4477 1 1s-.4477 1-1 1h-13c-.55228 0-1-.4477-1-1zm-5-6c0-.5523.44772-1 1-1h.01c.55228 0 1 .4477 1 1s-.44772 1-1 1h-.01c-.55228 0-1-.4477-1-1zm1 5c-.55228 0-1 .4477-1 1s.44772 1 1 1h.01c.55228 0 1-.4477 1-1s-.44772-1-1-1z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </UiButtonGroupItem>
                <UiButtonGroupItem value="calendar">
                  <svg height="22" viewBox="0 0 20 22" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clip-rule="evenodd"
                      d="m15 1c0-.552285-.4477-1-1-1s-1 .447715-1 1v1h-6v-1c0-.552285-.44772-1-1-1s-1 .447715-1 1v1h-2c-1.65685 0-3 1.34315-3 3v14c0 1.6569 1.34315 3 3 3h14c1.6569 0 3-1.3431 3-3v-14c0-1.65685-1.3431-3-3-3h-2zm3 7v-3c0-.55228-.4477-1-1-1h-2v1c0 .55228-.4477 1-1 1s-1-.44772-1-1v-1h-6v1c0 .55228-.44772 1-1 1s-1-.44772-1-1v-1h-2c-.55228 0-1 .44772-1 1v3zm-16 2h16v9c0 .5523-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </UiButtonGroupItem>
              </UiButtonGroup>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiCheckbox">
          <UiCheckbox v-model="checkbox">Check me</UiCheckbox>
        </DemoComponent>

        <DemoComponent name="UiDropdown">
          <UiDropdown v-model="selectedType" title="Тип" :options="agendaItemTypes" />
        </DemoComponent>

        <DemoComponent name="UiFormGroup">
          <UiFormGroup label="Label">
            <UiInput />
          </UiFormGroup>
          <UiFormGroup label="Label-inline" inline>
            <UiInput />
          </UiFormGroup>
        </DemoComponent>

        <DemoComponent name="UiImageUploader">
          <UiImageUploader />
        </DemoComponent>

        <DemoComponent name="UiInput">
          <div class="row">
            <div class="col">
              <h3>Simple</h3>
              <UiInput v-model="inputValue" placeholder="placeholder" />
            </div>
            <div class="col">
              <h3>left-icon slot</h3>
              <UiInput v-model="inputValue">
                <template #left-icon>
                  <UiIcon icon="user" />
                </template>
              </UiInput>
            </div>
            <div class="col">
              <h3>right-icon slot</h3>
              <UiInput v-model="inputValue">
                <template #right-icon>
                  <UiIcon icon="search" />
                </template>
              </UiInput>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>rounded</h3>
              <UiInput v-model="inputValue" rounded />
            </div>
            <div class="col">
              <h3>small</h3>
              <UiInput v-model="inputValue" small />
            </div>
            <div class="col">
              <h3>lazy</h3>
              <UiInput v-model.lazy="inputValue" />
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="UiInputDate">
          <UiInputDate />
        </DemoComponent>

        <DemoComponent name="UiRadioGroup">
          <UiRadioGroup v-model="dateFilter" :options="dateFilterOptions" />
        </DemoComponent>
      </DemoSection>

      <DemoSection section="Plugins">
        <DemoComponent name="TheToaster">
          <TheToaster ref="toaster" />
          <div class="row">
            <div class="col">
              <UiButton variant="primary" @click="$refs.toaster.success('success')">run success</UiButton>
            </div>
            <div class="col">
              <UiButton variant="danger" @click="$refs.toaster.error('error')">run error</UiButton>
            </div>
          </div>
        </DemoComponent>

        <DemoComponent name="TheTopProgressBar">
          <TheTopProgressBar ref="progress" />
          <div class="row">
            <div class="col">
              <UiButton variant="primary" @click="$refs.progress.start('demo1')">Start 1</UiButton>
            </div>
            <div class="col">
              <UiButton variant="secondary" @click="$refs.progress.finish('demo1')">Finish 1</UiButton>
            </div>
            <div class="col">
              <UiButton variant="primary" @click="$refs.progress.start('demo2')">Start 2</UiButton>
            </div>
            <div class="col">
              <UiButton variant="secondary" @click="$refs.progress.finish('demo2')">Finish 2</UiButton>
            </div>
            <div class="col">
              <UiButton variant="danger" @click="$refs.progress.fail()">Fail</UiButton>
            </div>
          </div>
        </DemoComponent>
      </DemoSection>

      <DemoSection section="Meetups">
        <DemoComponent name="MeetupAgenda+MeetupAgendaItem">
          <MeetupAgenda :agenda="meetups[0].agenda" />
        </DemoComponent>

        <DemoComponent name="MeetupCard">
          <MeetupCard :meetup="meetups[0]" />
        </DemoComponent>

        <DemoComponent name="MeetupForm+MeetupAgendaItemForm">
          <MeetupForm :meetup="meetups[0]" submit-text="No submit" />
        </DemoComponent>

        <DemoComponent name="MeetupInfo">
          <MeetupInfo :date="meetups[0].date" :organizer="meetups[0].organizer" :place="meetups[0].place" />
        </DemoComponent>

        <DemoComponent name="MeetupsCalendar">
          <MeetupsCalendar :meetups="meetups" />
        </DemoComponent>

        <DemoComponent name="MeetupsFooter">
          <MeetupsFooter />
        </DemoComponent>

        <DemoComponent name="MeetupsList">
          <MeetupsList :meetups="meetups" />
        </DemoComponent>

        <DemoComponent name="MeetupsLogo">
          <MeetupsLogo />
        </DemoComponent>

        <DemoComponent name="MeetupsNav">
          <MeetupsNav />
        </DemoComponent>
      </DemoSection>
    </UiContainer>
    <div style="flex: 1 0"></div>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import DemoComponent from './DemoComponent.vue';
import DemoSection from './DemoSection.vue';
import MeetupAgenda from '../../components/MeetupAgenda.vue';
import MeetupCard from '../../components/MeetupCard.vue';
import MeetupForm from '../../components/MeetupForm.vue';
import MeetupInfo from '../../components/MeetupInfo.vue';
import MeetupsCalendar from '../../components/MeetupsCalendar.vue';
import MeetupsFooter from '../../components/MeetupsFooter.vue';
import MeetupsList from '../../components/MeetupsList.vue';
import MeetupsLogo from '../../components/MeetupsLogo.vue';
import MeetupsNav from '../../components/MeetupsNav.vue';
import TheToaster from '../../plugins/toaster/TheToaster.vue';
import TheTopProgressBar from '../../plugins/progress/TheTopProgressBar.vue';
import UiAlert from '../../components/UiAlert.vue';
import UiBadge from '../../components/UiBadge.vue';
import UiButton from '../../components/UiButton.vue';
import UiButtonGroup from '../../components/UiButtonGroup.vue';
import UiButtonGroupItem from '../../components/UiButtonGroupItem.vue';
import UiCalendarEvent from '../../components/UiCalendarEvent.vue';
import UiCalendarView from '../../components/UiCalendarView.vue';
import UiCard from '../../components/UiCard.vue';
import UiCheckbox from '../../components/UiCheckbox.vue';
import UiContainer from '../../components/UiContainer.vue';
import UiDropdown from '../../components/UiDropdown.vue';
import UiFormGroup from '../../components/UiFormGroup.vue';
import UiIcon from '../../components/UiIcon.vue';
import UiImageUploader from '../../components/UiImageUploader.vue';
import UiInput from '../../components/UiInput.vue';
import UiInputDate from '../../components/UiInputDate.vue';
import UiLink from '../../components/UiLink.vue';
import UiPageTitle from '../../components/UiPageTitle.vue';
import UiRadioGroup from '../../components/UiRadioGroup.vue';
import UiTab from '../../components/UiTab.vue';
import UiTabs from '../../components/UiTabs.vue';
import UiTransitionFade from '../../components/UiTransitionFade.vue';
import UiTransitionGroupFade from '../../components/UiTransitionGroupFade.vue';
import meetups from './meetups.js';

const agendaIconMap = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

const agendaItemTypes = [
  {
    value: 'registration',
    text: 'Регистрация',
  },
  {
    value: 'opening',
    text: 'Открытие',
  },
  {
    value: 'break',
    text: 'Перерыв',
  },
  {
    value: 'coffee',
    text: 'Coffee Break',
  },
  {
    value: 'closing',
    text: 'Закрытие',
  },
  {
    value: 'afterparty',
    text: 'Afterparty',
  },
  {
    value: 'talk',
    text: 'Доклад',
  },
  {
    value: 'other',
    text: 'Другое',
  },
].map((item) => ({
  ...item,
  icon: agendaIconMap[item.value],
}));

const dateFilterOptions = [
  { text: 'Все', value: 'all' },
  { text: 'Прошедшие', value: 'past' },
  { text: 'Ожидаемые', value: 'future' },
];

export default {
  name: 'PageDemo',

  components: {
    UiTab,
    UiTabs,
    DemoSection,
    MeetupForm,
    MeetupAgenda,
    MeetupsCalendar,
    MeetupsList,
    MeetupsFooter,
    MeetupsNav,
    MeetupsLogo,
    UiPageTitle,
    UiTransitionGroupFade,
    UiTransitionFade,
    TheTopProgressBar,
    MeetupCard,
    MeetupInfo,
    TheToaster,
    UiRadioGroup,
    UiLink,
    UiImageUploader,
    UiInputDate,
    UiIcon,
    UiInput,
    UiFormGroup,
    UiDropdown,
    UiCheckbox,
    DemoComponent,
    UiCalendarEvent,
    UiCalendarView,
    UiCard,
    UiButtonGroupItem,
    UiButtonGroup,
    UiButton,
    UiBadge,
    UiAlert,
    UiContainer,
  },

  setup() {
    const toc = ref({});

    provide('demo:register-component', (section, componentName) => {
      if (!toc.value[section]) {
        toc.value[section] = [];
      }
      toc.value[section].push(componentName);
    });

    return {
      toc,
      // UiButtonGroup
      selected: ref('1'),
      view: ref('list'),
      // UiCheckbox
      checkbox: ref(false),
      // UiDropdown
      agendaItemTypes,
      selectedType: ref(undefined),
      // UiInput
      inputValue: ref(''),
      // UiRadioGroup
      dateFilterOptions,
      dateFilter: ref('all'),
      // Meetups
      meetups,
      // UiTransitionFade
      show: ref(true),
      // UiTransitionGroupFade
      count: ref('2'),
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  gap: 1rem;
}

.row + .row {
  margin-top: 1rem;
}

.col {
  flex: 1 0;
}

.icon-sample-container {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.icon-sample {
  height: 1.2rem;
  margin-right: 1ch;
  display: inline-block;
}
</style>
