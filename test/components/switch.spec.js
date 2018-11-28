import { mount } from 'vue-test-utils'
import UixSwitch from '@/components/switch'

describe('switch.js', () => {
    const wrapper = mount(UixSwitch, {
        propsData: {
            size: 'small',
            checked: false
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})