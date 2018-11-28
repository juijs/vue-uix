import { mount } from 'vue-test-utils'
import UixDatepicker from '@/components/datepicker'

describe('datepicker.js', () => {
    const wrapper = mount(UixDatepicker, {
        propsData: {
            dataFormat: 'yyyy/MM/dd',
            now: "2018/09/01"
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})