import { mount } from 'vue-test-utils'
import UixCalendar from '@/components/calendar'

describe('calendar.js', () => {
    const wrapper = mount(UixCalendar, {
        propsData: {
            dataFormat: 'yyyy/MM/dd',
            now: "2018/09/01",
            width: 500,
            height: 500
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})