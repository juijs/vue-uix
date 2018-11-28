import { mount } from 'vue-test-utils'
import UixTab from '@/components/tab'

describe('tab.js', () => {
    const wrapper = mount(UixTab, {
        propsData: {
            items: [
                { text: "Java" },
                { text: "JavaScript" },
                { text: "CSS" },
                { text: "SCSS" }
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