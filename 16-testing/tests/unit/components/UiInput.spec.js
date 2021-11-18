import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import UiInput from '@/components/UiInput';

// test('UiInput should be defined', () => {
//   expect(UiInput).toBeDefined();
// });

/*
  В этом файле используется mount, так как на этот момент на вебинаре мы ещё не узнали про shallowMount.
  Здесь подходит shallowMount.
 */

describe('UiInput', () => {
  it('should be defined', () => {
    expect(UiInput).toBeDefined();
  });

  // Ниже 4 не очень полезных теста. Добавлены для примера.
  // Их можно заменить на снапшот тесты
  // Но у них свои проблемы.
  it('should render input.input-group inside .form-control', async () => {
    const wrapper = mount(UiInput);
    const inputGroup = wrapper.find('.input-group');
    const formControl = inputGroup.find('input.form-control');
    expect(inputGroup.exists()).toBe(true);
    expect(formControl.exists()).toBe(true);
  });

  it('should have .form-control_rounded on input with rounded prop', async () => {
    const wrapper = mount(UiInput, { props: { rounded: true } });
    expect(wrapper.get('input').classes('form-control_rounded')).toBeTruthy();
  });

  it('should not have .form-control_rounded on input without rounded prop', async () => {
    const wrapper = mount(UiInput, { props: { rounded: false } });
    expect(wrapper.get('input').classes('form-control_rounded')).toBeFalsy();
  });

  it('should not have .form-control_rounded on input by default', async () => {
    const wrapper = mount(UiInput);
    expect(wrapper.get('input').classes('form-control_rounded')).toBeFalsy();
  });

  it('should toggle .form-control_rounded on input when rounded changes', async () => {
    const wrapper = mount(UiInput);
    const input = wrapper.get('input');

    await wrapper.setProps({ rounded: true });
    // await nextTick();
    expect(input.classes('form-control_rounded')).toBeTruthy();
  });

  it('should set input value from modelValue', async () => {
    const VALUE = 'TEST_VALUE';
    const wrapper = mount(UiInput, { props: { modelValue: VALUE } });
    const inputWrapper = wrapper.get('input');
    const input = inputWrapper.element;
    expect(input.value).toBe(VALUE);
  });

  it('should update input value on modelValue update', async () => {
    const NEW_VALUE = 'NEW_TEST_VALUE';
    const wrapper = mount(UiInput, { props: { modelValue: '' } });
    const inputWrapper = wrapper.get('input');
    // wrapper.get('input').element.value = value;
    // await wrapper.get('input').trigger('input');
    // await wrapper.get('input').trigger('change');
    await wrapper.get('input').setValue(NEW_VALUE);

    const input = inputWrapper.element;
    expect(input.value).toBe(NEW_VALUE);
  });

  it.each(['password', 'num', 'range', 'date', 'time', 'email', 'tel'])('should render input type=(%s)', (type) => {
    const wrapper = mount(UiInput, { attrs: { type } });
    expect(wrapper.get('input').attributes('type')).toBe(type);
  });

  it('should pass attrs to input', () => {
    const ATTRS = { type: 'email', maxlength: '20', 'data-attr-test': 'test' };
    const wrapper = mount(UiInput, { attrs: ATTRS });
    expect(wrapper.get('input').attributes()).toMatchObject(ATTRS);
  });

  it('should not pass attrs to root', () => {
    const ATTRS = { type: 'email', maxlength: '20', 'data-attr-test': 'test' };
    const wrapper = mount(UiInput, { attrs: ATTRS });
    expect(wrapper.attributes()).not.toMatchObject(ATTRS);
  });

  it('should emit update:modelValue with inputted value on input', async () => {
    const VALUE = 'TEST_VALUE';
    const wrapper = mount(UiInput);
    await wrapper.get('input').setValue(VALUE);
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([VALUE]);
  });

  it('should handle input event when input listener is set', async () => {
    const value = 'TEST_VALUE';
    const handler = jest.fn();
    const wrapper = mount(UiInput, {
      attrs: {
        onInput: (event) => handler(event.target.value),
      },
    });

    await wrapper.get('input').setValue(value);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(value);
  });

  it('should match snapshot', async () => {
    const wrapper = mount(UiInput);
    // .__app._container - костыль из Issue для Vue 3
    // https://github.com/eddyerburgh/jest-serializer-vue/issues/49
    // Пока не видел версии, в которой работает нормально
    expect(wrapper.__app._container).toMatchSnapshot();
  });
});
