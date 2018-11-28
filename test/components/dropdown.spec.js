import { mount } from 'vue-test-utils'
import UixDropdown from '@/components/dropdown'

describe('dropdown.js', () => {
    const wrapper = mount(UixDropdown, {
        propsData: {
            width: 200,
            items: [
                { text: "한국", index: 0 },
                { text: "미국", index: 1 },
                { text: "일본", index: 2 },
                { text: "중국", index: 3 },
                { text: "프랑스", index: 4 }
            ],
            index: 1,
            active: true
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})