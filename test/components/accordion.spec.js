import { mount } from 'vue-test-utils'
import UixAccordionBox from '@/components/accordion'

describe('accordion.js', () => {
    const wrapper = mount(UixAccordionBox, {
        propsData: {
            items: [
                "Group Item #1",
                "Group Item #2",
                "Group Item #3"
            ],
            index: 1
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})