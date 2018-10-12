/* bundling type : vue-uix + juijs */

import VueUix from '../src/main.js'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueUix, { theme: 'dark' });
}