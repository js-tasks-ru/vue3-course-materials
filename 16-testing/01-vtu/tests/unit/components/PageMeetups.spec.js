import { shallowMount, mount, flushPromises } from '@vue/test-utils';
import { nextTick } from 'vue';
import PageMeetups from '@/components/PageMeetups';
import MeetupsList from '@/components/MeetupsList';
import { fetchMeetups } from '@/api';
import meetups from '../__fixtures__/meetups.json';
import UiButtonGroup from '@/components/UiButtonGroup';
import MeetupsCalendar from '@/components/MeetupsCalendar';

jest.mock('@/api');

describe('PageMeetups', () => {
  beforeEach(() => {
    jest.resetModules();
    fetchMeetups.mockResolvedValue(meetups);
  });

  it('should be defined', () => {
    expect(PageMeetups).toBeDefined();
  });

  describe('Unit testing', () => {
    it('should fetch meetups by fetchMeetups on mounted', async () => {
      const wrapper = mount(PageMeetups, {
        global: {
          stubs: {
            UiIcon: true,
            UiEmpty: true,
            MeetupsCalendar: true,
            UiButtonGroup: true,
            UiRadioGroup: true,
            UiInput: true,
            MeetupsList: true,
            KeepAlive: true,
          },
        },
      });
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
    });

    it('should render meetups by MeetupsList', async () => {
      const wrapper = mount(PageMeetups, {
        global: {
          stubs: {
            UiButtonGroup: true,
            UiContainer: true,
            UiEmpty: true,
            UiIcon: true,
            UiInput: true,
            UiRadioGroup: true,
            MeetupsCalendar: true,
            MeetupsList: true,
            KeepAlive: true,
          },
        },
      });
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.getComponent(MeetupsList).props('meetups')).toMatchObject(meetups);
    });

    it('should render meetups by MeetupsList (with shallowMount)', async () => {
      const wrapper = shallowMount(PageMeetups);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.getComponent(MeetupsList).props('meetups')).toMatchObject(meetups);
    });

    it('should render MeetupsCalendar instead of MeetupsList after select calendar by UiButtonGroup', async () => {
      const wrapper = shallowMount(PageMeetups);
      await flushPromises();
      const buttonGroup = wrapper.getComponent(UiButtonGroup);
      buttonGroup.vm.$emit('update:view', 'calendar');
      await nextTick();
      expect(wrapper.findComponent(MeetupsList).exists()).toBeFalsy();
      expect(wrapper.findComponent(MeetupsCalendar).exists()).toBeTruthy();
    });

    it('should match shallowMount snapshot', async () => {
      const wrapper = shallowMount(PageMeetups);
      await flushPromises();
      expect(wrapper.__app._container).toMatchSnapshot();
    });
  });

  describe('Integration testing', () => {
    it('should render meetups headers in meetup-card header', async () => {
      const wrapper = mount(PageMeetups);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.getComponent(MeetupsList).props('meetups')).toMatchObject(meetups);
      // Выглядит не очень хорошо. Лучше снапшот?
      const cardHeaders = wrapper.findAll('.meetup-card header');
      for (let i = 0; i < cardHeaders.length; i++) {
        expect(cardHeaders[i].text()).toContain(meetups[i].title);
      }
    });

    it('should render .meetups-calendar instead of .meetups-list after click on calendar button', async () => {
      const wrapper = mount(PageMeetups);
      await flushPromises();
      // const calendarViewButton = wrapper.getAll('.button-group__button')[1];
      const calendarViewButton = wrapper.get('[aria-label="Календарь"]');
      await calendarViewButton.trigger('click');
      expect(wrapper.find('.meetups-list').exists()).toBeFalsy();
      expect(wrapper.find('.meetups-calendar').exists()).toBeTruthy();
    });

    it('should match mount snapshot', async () => {
      const wrapper = mount(PageMeetups);
      await flushPromises();
      expect(wrapper.__app._container).toMatchSnapshot();
    });
  });
});
