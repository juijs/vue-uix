import { mount } from 'vue-test-utils'
import UixComboBox from '@/components/combobox'

describe('combobox.js', () => {
    const wrapper = mount(UixComboBox, {
        propsData: {
            items: [
                { text: 'a', value: 1 }
            ]
        }
    });

    it('renders li for each item in props.items', () => {
        expect(wrapper.vm.items.length).toBe(1);
    })

    it('server render', () => {
        wrapper.vm.$mount();

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})