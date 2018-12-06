import { mount } from 'vue-test-utils'
import UixTimepicker from '@/components/timepicker'

describe('timepicker.js', () => {
    const wrapper = mount(UixTimepicker, {
        propsData: {
            year: 2015,
            month: 11,
            date: 2,
            hours: 6,
            minutes: 20,
            useCalendar: true
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})