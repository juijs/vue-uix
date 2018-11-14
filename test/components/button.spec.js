import { mount } from 'vue-test-utils'
import UixButton from '@/components/button'

describe('button.js', () => {
    const wrapper = mount(UixButton, {
        propsData: {
            items: [
                { icon: "", text: "A", value: "1", style: { width: "70px" } },
                { icon: "", text: "B", value: "2", style: { width: "70px" } },
                { icon: "", text: "C", value: "3", style: { width: "70px" } },
                { icon: "home", text: "Home", value: "home", focus: true },
                { icon: "gear", text: "Gear", value: "gear" },
                { icon: "help", text: "", value: "help" }
            ]
        }
    });

    it('renders li for each item in props.items', () => {
        expect(wrapper.vm.items.length).toBe(6);
    })

    it('server render', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})