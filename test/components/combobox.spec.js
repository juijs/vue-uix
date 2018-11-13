import { mount } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
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
        const renderer = createRenderer();

        renderer.renderToString(wrapper.vm, (err, str) => {
            if (err) throw new Error(err);
            expect(str).toMatchSnapshot();
        })
    });
})