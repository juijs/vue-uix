import { mount } from 'vue-test-utils'
import UixTree from '@/components/tree'

describe('tree.js', () => {
    const data = [
        { index: "0", text: "Windows" },
        { index: "0.0", text: "dll" },
        { index: "0.1", text: "zip" },
        { index: "1", text: "Download" }
    ];

    const wrapper = mount(UixTree, {
        propsData: {
            rootName: 'C:\\',
            items: data,
            item: data[2]
        }
    });

    it('snapshot!!', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})