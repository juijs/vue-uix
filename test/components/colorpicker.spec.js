import { mount } from 'vue-test-utils'
import UixColorpicker from '@/components/colorpicker'

describe('colorpicker.js', () => {
    const wrapper = mount(UixColorpicker, {
        propsData: {
            color: '#000'
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})