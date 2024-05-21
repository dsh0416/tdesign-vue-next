/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 该文件由脚本自动生成，如需修改请联系 PMC
 * This file generated by scripts of tdesign-api. `npm run api:docs Space VueNext(PC) vitest,finalProject`
 * If you need to modify this file, contact PMC first please.
 */
import { Space } from 'tdesign-vue-next';
import { getSpaceDefaultMount } from './mount';

describe('space Component', () => {
  ['start', 'end', 'center', 'baseline'].forEach((item) => {
    it(`props.align is equal to ${item}`, () => {
      const wrapper = getSpaceDefaultMount(Space, { align: item });
      expect(wrapper.classes(`t-space-align-${item}`)).toBeTruthy();
    });
  });

  it('props.breakLine works fine', () => {
    // breakLine default value is false
    const wrapper1 = getSpaceDefaultMount(Space);
    expect(wrapper1.classes('t-space--break-line')).toBeFalsy();
    // breakLine = true
    const wrapper2 = getSpaceDefaultMount(Space, { breakLine: true });
    expect(wrapper2.classes('t-space--break-line')).toBeTruthy();
    // breakLine = false
    const wrapper3 = getSpaceDefaultMount(Space, { breakLine: false });
    expect(wrapper3.classes('t-space--break-line')).toBeFalsy();
  });

  ['vertical', 'horizontal'].forEach((item) => {
    it(`props.direction is equal to ${item}`, () => {
      const wrapper = getSpaceDefaultMount(Space, { direction: item });
      expect(wrapper.classes(`t-space-${item}`)).toBeTruthy();
    });
  });

  it('props.separator works fine', () => {
    const wrapper = getSpaceDefaultMount(Space, { separator: () => <span class="custom-node">TNode</span> });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it('slots.separator works fine', () => {
    const wrapper = getSpaceDefaultMount(Space, {
      'v-slots': { separator: () => <span class="custom-node">TNode</span> },
    });
    expect(wrapper.find('.custom-node').exists()).toBeTruthy();
  });

  it(`props.size is equal to 'small'`, () => {
    const wrapper = getSpaceDefaultMount(Space, { size: 'small' });
    const domWrapper = wrapper.findComponent(Space);
    expect(domWrapper.element.style.gap).toBe('8px');
  });
  it(`props.size is equal to 'large'`, () => {
    const wrapper = getSpaceDefaultMount(Space, { size: 'large' });
    const domWrapper = wrapper.findComponent(Space);
    expect(domWrapper.element.style.gap).toBe('24px');
  });
  it(`props.size is equal to '38px'`, () => {
    const wrapper = getSpaceDefaultMount(Space, { size: '38px' });
    const domWrapper = wrapper.findComponent(Space);
    expect(domWrapper.element.style.gap).toBe('38px');
  });
  it(`props.size is equal to ['20px', '80px']`, () => {
    const wrapper = getSpaceDefaultMount(Space, { size: ['20px', '80px'] });
    const domWrapper = wrapper.findComponent(Space);
    expect(domWrapper.element.style.gap).toBe('20px 80px');
  });
});
